import moment from 'moment';
import config from '../../config/config.js';
import { tokenTypes } from'../../config/tokens.js';
import tokenService from '../../services/token.js';
import { userOne, admin } from'./userData.js';

const accessTokenExpires = moment().add(config.jwt.accessExpirationMinutes, 'minutes');
const userOneAccessToken = tokenService.generateToken(userOne._id, accessTokenExpires, tokenTypes.ACCESS);
const adminAccessToken = tokenService.generateToken(admin._id, accessTokenExpires, tokenTypes.ACCESS);

export { userOneAccessToken, adminAccessToken };
