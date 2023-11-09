import express from 'express';
import indexRoutes from './routes/indexRoutes.js';
import cors from 'cors';
import passport from 'passport';
import httpStatus from 'http-status';
import { isTest, isProd } from './config/config.js';
import * as morgan from './config/morgan.js';
import { jwtStrategy } from './config/passport.js';
import { errorConverter, errorHandler } from './middlewares/error.js';
import { authLimiter } from './middlewares/rateLimiter.js';


const app = express();

// requests manejo de errores
if (!isTest()) {
    app.use(morgan.successHandler);
    app.use(morgan.errorHandler);
}

// parseo json req body
app.use(express.json());

// parseo urlencoded req body
app.use(express.urlencoded({ extended: true }));

// cors
app.use(cors());
app.options('*', cors());

// jwt 
app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

// Limitar las llamadas falladas repetidas al endpoint de autentificacion 
if (isProd()) {
  app.use('/auth', authLimiter);
}

//rutas
app.use(indexRoutes);

// enviar 404 error para requests desconocidas
app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});
  
//convertir error en ApiError, de ser necesario
app.use(errorConverter);

// manejo de errores
app.use(errorHandler);

export {app};