# PROYECTO-AWS-FINAL
Computacion en la Nube
Guía general para verificar la funcionalidad de la base de datos MYSQL y como conectarla en el entorno de AWS utilizando el framework serverless.
1.	Iniciar sesión en la consola de AWS.
2.	Descargar e instalar https://nodejs.org/en
3.	Abrir la consola Node.js command prompt
4.	Creamos la carpeta para el proyecto ejecutamos el comando: mkdir proyecto-final
5.	Ahora se buscará la dirección de la carpeta y ejecutamos el comando: cd proyecto-final.
6.	Configuración del proyecto: npm init -y
7.	Instalar framework serverless: npm install -g serverless
8.	Configurar las credenciales de AWS: serverless config credentials --provider aws --key <AWS_ACCESS_KEY> --secret <AWS_SECRET_ACCESS_KEY>.
Debemos de colocar los datos correspondientes según nuestro ID de la cuenta y nuestro usuario.                                                                       
Ingresamos: 1. Id de clave de acceso. 2. Clave de acceso secreta                              
9.	serverless config credentials --provider aws --key <AWS_ACCESS_KEY> --secret <AWS_SECRET_ACCESS_KEY> --profile myprofile, aqui reemplazamos datos.
10.	serverless config credentials --provider aws --key <AWS_ACCESS_KEY> --secret <AWS_SECRET_ACCESS_KEY> --overwrite, aqui reemplazamos datos.
11.	Descargar las versiones: node --version 
12.	Descargar: npm --version 
13.	Descargar: serverless --version 
14.	Estructura del proyecto: serverless create --template aws-node.js
15.	Si se presenta algún error actualizamos la versión: npm install -g npm@9.7.2 y volvemos a ejecutar el comando del paso 14.
16.	Ingresamos a visual studio y observamos la carpeta del proyecto y su estructura.
17.	En el archivo serverless.yml configuramos los servicios y los recursos necesarios para la ejecución del proyecto.
18.	Creamos un archivo getOrder.js definimos la lógica para obtener un pedido especifico desde el bucket de respaldo s3.
19.	Creamos un archivo createOrder.js definimos la lógica para crear el pedido aquí se envían los mensajes a la cola y un correo electrónico utilizando el servicio SES.
20.	Creamos un archivo index.js y app.js contiene la lógica para guardar los datos del formulario en la base de datos, verificamos que los datos de la base de datos sean registrados correctamente.
21.	Creamos un archivo index.html contiene el formulario para ingresar los datos del pedido.
22.	Creamos un archivo style.css contiene la presentación y apariencia del formulario html.
23.	Creamos un archivo processOrder.js controlador de la función AWS lambda que procesa y recibe los mensajes de la cola.
24.	Ejecutamos el comando: serverless deploy, este se encarga de tomar la configuración definida en el archivo serverless.yml y demas archivos aqui realiza las acciones necesarias para desplegar en la nube.
25.	Ejecutamos el comando: aws rds describe-db-security-groups --query ‘DBSecurityGroups[0].DBSecurityGroupId’ --region us-east-1 "DBSecurityGroups[0].DBSecurityGroupId", para obtener información sobre los grupos de seguridad de la instancia de la base de datos.
26.	Verificamos que todo se haya creado correctamente en AWS.
27.	Ejecutamos el comando: npm install serverless-mysql, instala un paquete en el proyecto en el que se utiliza las funciones y métodos que son proporcionados para interactuar con la base de datos.
28.	Ejecutamos el comando: npm install mysql2.
29.	Ingresamos a nuestra administradora de base de datos e ingresamos los datos correctamente, aquí creamos nuestras tablas.
30.	Ejecutamos el comando: node app.js, este cargara el archivo app.js y ejecutara el código que contiene para establecer una conexión con la base de datos.
31.	Ingresamos al formulario de html y diligenciamos los datos, aquí la notificación será enviada a nuestro correo de verificación y saldrá el mensaje de la solicitud.
    
NOTA: Debemos de cambiar los datos y diligenciar con los datos correspondientes que fueron creados en AWS en nuestro usuario e ID de cuenta.


PROYECTO FINAL AWS --
Presentado a: Allan Pérez --
Presentado por: Paola Andrea Betancur y 
Diana Marcela Lengua -- Tecnología Sistemas Informáticos -- 
Computación en la Nube --
Quinto Semestre
 
