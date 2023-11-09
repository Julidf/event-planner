import nodemailer from 'nodemailer';
import {smtpHost,smtpPort,smtpUser,smtpPass,smtpFrom,frontUrl,isTest, isDev} from '../config/config.js';
import {logger} from '../config/logger.js';

const transport = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    auth: {
        user: smtpUser,
        pass: smtpPass,
    }
});

if (!isTest()) {
  transport
    .verify()
    .then(() => logger.info('Conectado al servidor de Email'))
    .catch(() => logger.warn('No fue posible conectarse al servidor de Email.'));
}

/**
 * Enviar un email
 * @param {string} to
 * @param {string} subject
 * @param {string} text
 * @returns {Promise}
 */
const sendEmail = async (to, subject, text) => {
  const msg = { from: smtpFrom, to, subject, text };
  await transport.sendMail(msg);
};

/**
 * Enviar reseteo de contraseña a email
 * @param {string} to
 * @param {string} token
 * @returns {Promise}
 */
const sendResetPasswordEmail = async (to, token) => {
  const subject = 'Reseteo de Password';
  //TODO Remplazar url con link a la vista de reseteo de contraseña
  const resetPasswordUrl = `${frontUrl}/reset-password?token=${token}`;
  const text = `Querido Usuario,
Para resetear tu contraseña, haz clic en el siguiente link: ${resetPasswordUrl}
Si tu no solicitaste un reseteo de contraseña, entonces ignora este email.`;
  if(isDev) logger.info(resetPasswordUrl);
  await sendEmail(to, subject, text);
};

/**
 * Envio de email de verificacion
 * @param {string} to
 * @param {string} token
 * @returns {Promise}
 */
const sendVerificationEmail = async (to, token) => {
  const subject = 'Verificacion de Email';
  //TODO Remplazar url con link a la vista de verificacion de Email
  const verificationEmailUrl = `${frontUrl}/verify-email?token=${token}`;
  const text = `Querido Usuario,
Para verificar tu correo, haz clic en el siguiente link: ${verificationEmailUrl}
Si tu no creaste esta cuenta, entonces ignora este email.`;
  if(isDev) logger.info(verificationEmailUrl);
  await sendEmail(to, subject, text);
};

export { transport, sendEmail, sendResetPasswordEmail, sendVerificationEmail};