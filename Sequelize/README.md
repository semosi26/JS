### ¿QUÉ ES SEQUELIZE?
- Sequelize es el principal ORM para Node.js que es compatible con practicamente todas las bases de datos relacionales
(MYSQL,SQLServer, Postgres, Oracle,etc)

## ¿Qué es un ORM?
- El principal objetivo de un ORM (Object-Relational mapping)
es facilitar la comunicacion entre un lenguaje de programación y una base de datos, gracias a esto se ve como resultado una aceletacion y simplificacion en el desarrollo de nuestras Apps.

### OBJETIVOS 
* Aprender a conectar una base de datos a Node mediante Sequelize
* Crear los modelos para las tablas
* Hacer una Rest API con todas sus operaciones: GET, POST, PUT y DELETE (CRUD)
* Realizar un JOIN entre tablas para poder obtener toda la informacion necesaria
* Comprender como hacer relaciones de tablas: One to Many, One To One, Many to Many


#### RECORDAR QUE:
- Node.js es un entorno de ejecución de JavaScript en el servidor.

- npm viene incluido automáticamente cuando instalas Node.js.

- Mientras que Node.js ejecuta tu código, npm facilita agregar módulos externos fácilmente.

- El archivo package-lock.json se genera automáticamente cuando ejecutas npm install, y su función principal es asegurar que todos los que instalen tu proyecto usen exactamente las mismas versiones de dependencias.

- La carpeta node_modules es donde se instalan todas las dependencias de tu proyecto cuando ejecutas npm install. Es creada automáticamente y contiene todos los paquetes (y sus subdependencias) que tu proyecto necesita para funcionar.

### PARA INICIAR: 
**npm init -y** 

El comando npm init -y sirve para crear automáticamente un archivo package.json en tu proyecto con valores predeterminados, sin hacerte preguntas interactivas.


 **npm install express sequelize mysql2 sqlite3** 

 **npm i nodemon -D**
 nodemon es una herramienta que reinicia automáticamente tu servidor cuando detecta cambios en tu código fuente. Muy útil durante el desarrollo