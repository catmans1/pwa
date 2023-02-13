# pwa
Practice PWA project

1. Create pwa project

`npx create-react-app my-app --template cra-template-pwa`

The TypeScript equivalent is:

`npx create-react-app my-app --template cra-template-pwa-typescript`

2. Make Home Icon

Follow the guide:

https://web.dev/learn/pwa/installation/

https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Add_to_home_screen

3. Store data in local and work in offline

The project includes: Home and user page

- Home page: 

User can login whatever type input username and password, after user login success the data will store in local storage.

When come this page again, it will get data from local storage even though the website run in offline and go to User page directly

- User page:

This page shows all users, which get the data from `https://jsonplaceholder.typicode.com/users` and it will store the data in local storage.
The page will show all users even though the website run in offline
