# useFetch Hook

## Описание

`useFetch` — это кастомный хук React для выполнения HTTP-запросов. Он обрабатывает загрузку, ошибки и позволяет перезапрашивать данные с новыми параметрами.

## Использование

### Импорт хука

import { useFetch } from './useFetch';
Пример использования
typescript
Copy code
function Demo() {
  const {
    data,
    isLoading,
    error,
    refetch
  } = useFetch('https://jsonplaceholder.typicode.com/posts');
  
  return (
    <div>
      <div>
        <button onClick={() => refetch({
          params: {
            _limit: 3
          }
        })}>
          Перезапросить
        </button>
      </div>
      {isLoading && 'Загрузка...'}
      {error && 'Произошла ошибка'}
      {data && !isLoading && data.map(item => <div key={item.id}>{item.title}</div>) }
    </div>
  );
}


### Аргументы
url: URL-адрес, на который будет выполнен запрос.
initialOptions: Необязательный объект с параметрами запроса.

### Возвращаемые значения
data: Данные, полученные от API.
isLoading: Логическое значение, указывающее на состояние загрузки.
error: Сообщение об ошибке, если запрос завершился с ошибкой.
refetch: Функция для повторного запроса данных. Может принимать дополнительные параметры запроса.

### API
useFetch(url: string, initialOptions?: FetchOptions)
	url (string): URL для выполнения HTTP-запроса.
	initialOptions (FetchOptions): Необязательный объект для настройки параметров запроса.

FetchOptions
	Объект, содержащий параметры запроса:
	params (Record<string, string | number>): Параметры запроса в виде объекта ключ-значение.

Возвращаемые значения
	data (any): Данные, полученные от API.
	isLoading (boolean): Флаг загрузки данных.
	error (string | null): Сообщение об ошибке.
	refetch (function): Функция для повторного выполнения запроса.

### Пример использования refetch

Функция refetch позволяет повторно выполнить запрос с новыми параметрами. Например, можно изменить количество загружаемых элементов:

<button onClick={() => refetch({
  params: {
    _limit: 5
  }
})}>
  Перезапросить
</button>


### Установка
Склонируйте репозиторий:
git clone git@github.com:ElenaSoshina/useFetch.git
Установите зависимости:
npm install
Запустите проект:
npm start
