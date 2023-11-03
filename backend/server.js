import express from 'express'
import indexRoutes from './routes/indexRoutes.js'
import cors from 'cors'
import seedServices from './seed/seedService.js';
import { connectToDatabase } from './connection/connection.js'
import { serverPort } from './config/config.js'

const app = express();

app.use(express.json());
app.use(cors())
app.use(indexRoutes);

async function startServer() {

    try {

        // Conecta con la base de datos
        await connectToDatabase();

        // Ejecuta el seeding
        await seedServices();

        app.listen(serverPort, () => {
            console.log('SERVER PORT:', serverPort);
        });

    } catch (err) {

        console.error('Error starting the server:', err);

    }
}
  
startServer();