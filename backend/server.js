import connectDB from './connection/connection.js';
import { app } from './app.js';
import { serverPort } from './config/config.js';
import { logger } from './config/logger.js';

//StartSequence
let start = async () => {
    let server;
    try {
        // Conecta con la base de datos
        connectDB().then(()=>{
            server = app.listen(serverPort, () => {
                logger.info('SERVER PORT: '+ serverPort);
            });
        });
    } catch (err) {
        logger.info('Error iniciando el servidor');
        logger.error(err);
    }
    return server;
};

let server = await start();

const exitHandler = () => {
    if (server) {
      server.close(() => {
        logger.info('Server Cerrado');
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
};

const unexpectedErrorHandler = (err) => {
    logger.error(err);
    exitHandler();
};
  
process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
    logger.info('SIGTERM recibido');
    exitHandler();
});