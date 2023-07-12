const AWS = require('aws-sdk');
const ses = new AWS.SES();

//const mysql = require("mysql2")
//const conexion = mysql.createConnection({
    //host: "proyecto-final-dev-mydatabase-lrwcrmz49yde.chm3xplunw0a.us-east-1.rds.amazonaws.com",
    //user: "admin",
    //pass: 12345678,
    //database: "proyecto_restaurante_bd"
//})

module.exports.handler = async (event) => {
    // Obtener los datos del pedido del evento recibido

    // Crear una instancia del servicio SQS
    const sqs = new AWS.SQS();

    // Configurar los parámetros del mensaje
    const params = {
        MessageBody: JSON.stringify({ /* Datos del pedido */ }),
        QueueUrl: 'https://sqs.us-east-1.amazonaws.com/516187550874/order-queue' // Reemplaza con tu URL de la cola
    };

    try {
        // Enviar el mensaje a la cola
        await sqs.sendMessage(params).promise();

        // Enviar el correo electrónico al cliente
        const emailParams = {
            Destination: {
                ToAddresses: ['gianella6456@gmail.com'] // Reemplaza con la dirección de correo electrónico del destinatario verificado
            },
            Message: {
                Body: {
                    Text: {
                        Data: '¡Gracias por tu pedido!' // Reemplaza con el cuerpo del mensaje que deseas enviar
                    }
                },
                Subject: {
                    Data: 'Confirmación de pedido' // Reemplaza con el asunto del correo electrónico
                }
            },
            Source: 'marcelalen11@gmail.com' // Reemplaza con tu dirección de correo electrónico de origen verificada
        };

        await ses.sendEmail(emailParams).promise();

        //conexion.execute("insert into Cliente (nombre_completo, drireccion, telefono, correo_electronico ) values ()")

        // Retornar la respuesta al cliente
        return {
            statusCode: 200,
            body: JSON.stringify({ 
                message: 'Pedido creado exitosamente'
            })
        };
    } catch (error) {
        // En caso de error, manejarlo adecuadamente

        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error al crear el pedido', error: error.message })
        };
    }
};
