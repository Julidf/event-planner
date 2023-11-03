import express from 'express'
import indexRoutes from './routes/indexRoutes.js'
import cors from 'cors'
import { connectToDatabase } from './connection/connection.js'
import { serverPort } from './config/config.js'

const app = express();

app.use(express.json());
app.use(cors())
app.use(indexRoutes);

async function startServer() {
    try {
        await connectToDatabase();
        app.listen(serverPort, () => {
            console.log('SERVER PORT:', serverPort);
        });
    } catch (err) {
        console.error('Error starting the server:', err);
    }
}
  
startServer();