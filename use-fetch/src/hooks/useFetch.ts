import { useCallback, useEffect, useState } from 'react';

interface FetchOptions {
  params?: Record<string, string | number>;
}

export function useFetch(url: string, initialOptions?: FetchOptions) {
  // состояние для хранения данных
  const [data, setData] = useState<any[]>([]); // Указываем, что data — это массив

  // состояние для отслеживания процесса загрузки
  const [isLoading, setIsLoading] = useState(false);
  // состояние для ошибки
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async (options: FetchOptions = {}) => {
    setIsLoading(true);
    setError(null);

    try {
      const queryParams = new URLSearchParams(
        Object.entries({
          ...(initialOptions?.params || {}),
          ...(options.params || {}),
        }).reduce((acc, [key, value]) => {
          acc[key] = String(value); // Преобразуем все значения в строки
          return acc;
        }, {} as Record<string, string>)
      ).toString(); // Преобразуем объект параметров в строку запроса

      const response = await fetch(`${url}?${queryParams}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Произошла ошибка');
    } finally {
      setIsLoading(false);
    }
  }, [url, initialOptions]);

  useEffect(() => {
    fetchData(); // Вызов fetchData без параметров при первом рендере
  }, [fetchData]);

  const refetch = (options?: FetchOptions) => {
    fetchData(options); // Вызов fetchData с переданными параметрами
  };

  return { data, isLoading, error, refetch };
}
