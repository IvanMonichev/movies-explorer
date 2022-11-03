#  Проект «Место»

### ⚙️ Технологии
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)

___

### 📄 Описание
**Сайт «Movies Explorer»** – это дипломный проект, который был разработан в рамках изучения
онлайн-курса [Яндекс.Практикум](https://practicum.yandex.ru/) на освоение профессии «Веб-разработчик».

**Цель проекта** – закрепление и демонстрацая ранее изученных навыков разработки веб-приложений.

Структура проекта разделена на 2 части: *фронтенд* и *бэекенд*. Взаимосвязь выстроена по архитектуре REST.

Сайт предоставляет сервис, в котором можно найти фильмы по запросу и сохранить в личном кабинете.

Пользователь вводит в строку поиска ключевые слова и нажимает кнопку «Искать». После этого сайт должен выполняет два действия:
- отправить запрос к внешнему сервису с данными о фильмах, получить данные и сохранить;
- согласно выбранному жанру найти все подходящие фильмы и отобразить карточки с ними;
- когда пользователь сохраняет фильм, он должен отображаться в специальном разделе сайта.

___

### 💻 Функциональность
- регистрация;
- авторизация;
- редактирование профиля (имя, почта);
- поиск фильмов;
- сохранение фильмов в специальном разделе.

___
### 📌 Планы по доработке
- добавить функционал по восстановлению пароля;
- переписать приложение с использованием стейт-менеджера Redux;
- переписать код на TypeScript.

___

### 💡 Запуск проекта:
1. Для запуска проекта потребуется установленная база данных [MongoDB](https://mongodb.prakticum-team.ru/try/download/community?jmp=docs).
2. Запустите базу данных. Веб-сервер подключается к базе данных по адресу — `mongodb://localhost:27017/`.
3. Установите бэкенд зависимости и запустите сервер — `cd backend && npm install && npm run dev`.
4. Установите фронтенд зависимости и запустите React приложение — `cd ../frontend && npm install && npm start`.