import express from 'express'
import indexRoutes from './routes/indexRoutes.js'
import connection from './connection/connection.js'
import { serverPort } from './config/config.js'

const app = express();

//rutas
app.use(indexRoutes);

// Error Handler
app.use((error, req, res, next) => {
    res
        .status(error.status || 500)
        .send({ success: false, message: error.message });
});

connection.sync({ force: false })
    .then(() => {
        app.listen(serverPort, () => {
            console.log("Server OK http://localhost:" + serverPort);
        })
})