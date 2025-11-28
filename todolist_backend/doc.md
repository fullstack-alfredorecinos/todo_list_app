# Pasos para configurar proyecto Backend Todolist App
-npm init -y  - Crear package.json por defecto
-npm init - crear package.json desde cero configurandolo paso a paso
-crear repositorio y vincular token para repositorio con esta estructura git remote add origin https://<TOKEN>@github.com/<USER>/<REPO>.git
-Comando para revisar si tenemos un rempositorio remoto asociado:  git remote -v | git fetch origin | | git branch -r | git branch | git branch -a | git checkout origin/main | 
-Crear una nueva rama remota despues de hacer el fecth | git checkout -b remoto
-Hacer un rebase desde master a la rama remota con git rebase remoto

## Instalando dependencias Backend
-Debemos estar en la carpeta correspondiente (todolist_backend)
-npm install express --save | Instalar Express
-npm install dotenv  | Instalar dot environment
-npm install nodemon
-npm install --save-dev prisma@6.2.1
-npm install@prisma/client@6.2.1
-npx prisma init
-npx prisma migrate dev --name init
-npx prisma studio
-npx prisma generate
-npx prisma push
-




### Estructura principal del proyecto Backend
-Estructura de carpetas: controllers, routes, services, test
-Archivo principal app.js
-node test/test.js | comando para ejecutar el script del test y para ejecutar pruebas unitarias con una librería de pruebas
-app.js | configurando servidor de express
-Instalar postman para trabajar con peticiones HTTP
-Configurar los middlewares json y routes en archivo app.js
-Middleware:  req, res y next | Recibe la solicitud, envía una respuesta y el next autoriza para que la solicitud siga adelante

#### Comandos Mongo
-show dbs - Muestras las bases de datos que tenemos
-show collections - Muestra las colecciones que tenemos
-use dbName - para usar una base de datos

##### LINKS
-https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status
-https://swagger.io/
-JWT Encoder(elegir esta opción para probar) | https://www.jwt.io/
-https://www.npmjs.com/package/jsonwebtoken
-Headers https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers
-Esquemas de autenticación | https://developer.mozilla.org/es/docs/Web/HTTP/Guides/Authentication

