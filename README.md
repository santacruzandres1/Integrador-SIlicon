## Silicon-Project

## Sistema de Calificaciones

**Descripción General:** El proyecto tiene como objetivo desarrollar un sistema de calificaciones que permita a los usuarios, como estudiantes y profesores, gestionar y registrar calificaciones de manera eficiente. El sistema está respaldado por una base de datos SQL para almacenar y gestionar las notas de manera estructurada.

## **Características Clave:**

**Gestión de Usuarios:** El sistema permite a los usuarios registrarse, iniciar sesión y gestionar datos. Los usuarios  pueden ser de tres tipos: estudiantes, profesores y administradores.

**Registro de Calificaciones:** Los profesores podrán registrar calificaciones para cada uno de sus estudiantes en una materia y curso específico. Las calificaciones son numéricas del 0 al 10 con hasta dos decimales.
   
**Consulta de Calificaciones:** Los estudiantes podrán consultar sus calificaciones por curso y ver su desempeño académico a lo largo del tiempo.
   
**Informes Académicos:** El sistema generará tablas de notas que mostrarán el desempeño general de un estudiante en todas sus materias.
   
**Base de Datos SQL:** Se utilizará una base de datos SQL para almacenar y gestionar la información de usuarios, cursos,    calificaciones y otros datos relevantes.    

**Tecnologías Utilizadas:**

 -   Lenguaje de programación para el backend node (Javascript).
 -   Base de datos SQL MariaDB.
 -   Framework utilizado Express.
 -   React.
 -   HTML.
 -   Bootstrap.


**Diagrama de Base de Datos:** La base de datos consiste en 5 tablas.


**Flujo de Funcionamiento:** 

**Administrador:**
 - Tendrá una cuenta registrada de forma preestablecida en el servidor.
 - Podrá crear nuevos usuarios , materias y cursos.


 **Seguridad:**

**Contraseñas:** Las contraseñas serán encriptadas con bcrypt y almacenadas en la base de datos.

**Autenticacion:** Para ingresar al sistema el usuario debe iniciar sesión mediante un email y una contraseña que serán proporcionadas por el administrador.

 **Sesiones:** Cada vez que un usuario realice un login, se le enviara un json web token (JWT) que deberá utilizar para su autorización.
                Para cerrar sesión el usuario debe abrir la pestaña Usuario en el header del sistema y clickear en Cerrar Sesión.


 **Escalabilidad:**

La idea del grupo es poder escalar en el proyecto y añadir más funciones como por ejemplo poder crear avisos , llevar a cabo la gestión de asistencias de los alumnos, entre otras funciones que un sistema de gestión educativo necesita.



 **Despliegue:**

"**Frontend:** 

Para iniciar se deben instalar las dependencias necesarias mediante el comando =>  npm install 

Luego es necesario ingresar desde la carpeta grading-system y y realizar el comando => npm start "
          
**Backend:**
Para iniciar se deben instalar las dependencias necesarias mediante el comando =>  npm install

Luego es necesario realizar el comando => nodemon index.js (windows) / npx nodemon index.js (linux) 

De esta manera el sistema estará en funcionamiento en la url => localhost:3000 "

