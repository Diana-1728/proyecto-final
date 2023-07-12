const express = require('express');
const mysql = require('mysql');

// Crear conexión a la base de datos MySQL
const connection = mysql.createConnection({
  host: 'proyecto-final-dev-mydatabase-lrwcrmz49yde.chm3xplunw0a.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: '12345678',
  database: 'proyecto_restaurante_bd'
});

// Conectar a la base de datos MySQL
connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
    return;
  }
  console.log('Conexión a la base de datos establecida');
});

// Crear una instancia de la aplicación Express
const app = express();

// Configurar el middleware para analizar el cuerpo de las solicitudes como JSON
app.use(express.json());

// Ruta para procesar el formulario y guardar los datos en la base de datos
app.post('/guardar_datos', (req, res) => {
  // Obtener los datos del formulario enviados en el cuerpo de la solicitud
  const { nombre, direccion, telefono, correo } = req.body;

  // Crear una consulta SQL para insertar los datos en la tabla "Cliente"
  const sql = `INSERT INTO Cliente (nombre_completo, direccion, telefono, correo_electronico) 
               VALUES (?, ?, ?, ?)`;

  // Ejecutar la consulta SQL con los datos del formulario
  connection.query(sql, [nombre, direccion, telefono, correo], (error, results) => {
    if (error) {
      console.error('Error al insertar datos:', error);
      res.status(500).json({ error: 'Error al insertar datos en la base de datos' });
      return;
    }
    console.log('Datos insertados correctamente');
    res.json({ message: 'Datos insertados correctamente' });
  });
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor en ejecución en el puerto 3000');
});
