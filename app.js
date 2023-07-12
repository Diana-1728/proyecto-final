const express = require('express');
const mysql = require('mysql2');

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

  // Ejemplo de consulta SQL SELECT para obtener los clientes
  connection.query('SELECT * FROM Cliente', (error, results, fields) => {
    if (error) {
      console.error('Error al realizar la consulta de clientes:', error);
      return;
    }
    console.log('Clientes:', results);
  });

  // Ejemplo de consulta SQL SELECT para obtener los pedidos
  connection.query('SELECT * FROM Pedido', (error, results, fields) => {
    if (error) {
      console.error('Error al realizar la consulta de pedidos:', error);
      return;
    }
    console.log('Pedidos:', results);
  });
});

// Crear una instancia de la aplicación Express
const app = express();

// Configurar el middleware para analizar el cuerpo de las solicitudes como JSON
app.use(express.json());

// Ruta para procesar el formulario y guardar los datos en la base de datos
app.post('/guardar_datos', (req, res) => {
  // Obtener los datos del formulario enviados en el cuerpo de la solicitud
  const { nombre, direccion, telefono, correo, producto, cantidad, valorUnidad, valorTotal } = req.body;

  // Ejemplo de consulta SQL INSERT para guardar los datos del cliente
  const insertClienteSql = `INSERT INTO Cliente (nombre_completo, direccion, telefono, correo_electronico) 
                            VALUES (?, ?, ?, ?)`;

  // Ejemplo de consulta SQL INSERT para guardar los datos del pedido
  const insertPedidoSql = `INSERT INTO Pedido (producto, cantidad, valor_unidad, valor_total) 
                           VALUES (?, ?, ?, ?)`;

  // Ejecutar las consultas SQL con los datos del formulario
  connection.query(insertClienteSql, [nombre, direccion, telefono, correo], (error, clienteResult) => {
    if (error) {
      console.error('Error al insertar datos del cliente:', error);
      res.status(500).json({ error: 'Error al insertar datos del cliente en la base de datos' });
      return;
    }

    connection.query(insertPedidoSql, [producto, cantidad, valorUnidad, valorTotal], (error, pedidoResult) => {
      if (error) {
        console.error('Error al insertar datos del pedido:', error);
        res.status(500).json({ error: 'Error al insertar datos del pedido en la base de datos' });
        return;
      }

      console.log('Datos insertados correctamente');
      res.json({ message: 'Datos insertados correctamente' });
    });
  });
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor en ejecución en el puerto 3000');
});

