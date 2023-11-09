import express  from 'express';
import * as authController  from '../controllers/authController.js';
import {auth}  from '../middlewares/auth.js';

const authRoutes = express.Router();

authRoutes.post('/register', authController.register);
authRoutes.post('/login', authController.login);
authRoutes.post('/logout', authController.logout);
authRoutes.post('/refresh-tokens', authController.refreshTokens);
authRoutes.post('/forgot-password', authController.forgotPassword);
authRoutes.post('/reset-password', authController.resetPassword);
authRoutes.post('/send-verification-email', auth(), authController.sendVerificationEmail);
authRoutes.post('/verify-email', authController.verifyEmail);

export {authRoutes};