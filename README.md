# Kinosmena
Project description

## Build Setup

```
# install dependencies
npm install

# serve with hot reload at localhost:5173
npm run dev

# build for production with minification
npm run build
```

## Project Structure
- Все разложено по полочкам: компонеты лежат в папке **/src/components**, хуки в **/src/hooks**
- Для нового компонента создается отдельная папка, название папки, компонента и файла стилей должны совпадать
  ![image](https://github.com/viirtualp1/kinosmena/assets/29793587/75b596b5-6a14-453a-8694-e66117f9a8f8)
- Внутри папки с компонентом/хуком создается файл **index.ts**
  
  ![image](https://github.com/viirtualp1/kinosmena/assets/29793587/b642ca3b-458b-457a-9d27-8b41fe8abb2a)
  
  Это нужно, чтобы не писать длиннющий путь к каждому хуку.
  
  После этого, импорт **useTelegram** выглядит так: `import { useTelegram } from './composables/useTelegram'`

- Перед выполенением задачи создаем новую ветку от ветки **master** (не забываем предварительно спулиться: `git pull`).
  
  Название ветки должно быть коротким и отражать суть задачи (пример: `products-list`, `fix-button-color`)

  После окончания работы коммитим и пушим ветку, переходим на гитхаб, создаем пул реквест (появится кнопка на главной странице репозитория) и отправляем ссылку мне в телегу @virtualp1 :)
  
- В каждом пул реквесте срабатывают `actions` (вкладка `checks` в pr), он проверяет ваш код на наличие ошибок при билде и прогоняет его через линтер
  
  ![image](https://github.com/viirtualp1/kinosmena/assets/29793587/bfb11662-0ad4-486c-a91d-1a5217d280a4)
