#env example

DATABASE_URL="postgresql://username:password@host:5432/{database}?schema=public"

#install project

1. Инициализировать проект yarn install
2. Создать новую БД postgres
3. Создать .env файл и настроить подключение к БД
4. Сделать миграцию yarn migrate или npx prisma migrate dev
5. Запустить проект yarn start:dev
