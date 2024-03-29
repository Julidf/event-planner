import mongoose  from 'mongoose';
import {toJSON}  from './plugins/toJson.js';
import {tokenTypes} from '../config/tokens.js';

const tokenSchema = mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
      index: true,
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    type: {
      type: String,
      enum: [tokenTypes.REFRESH, tokenTypes.RESET_PASSWORD, tokenTypes.VERIFY_EMAIL],
      required: true,
    },
    expires: {
      type: Date,
      required: true,
    },
    blacklisted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Agrega el plugin de conversion de mongoose a json
tokenSchema.plugin(toJSON);

/**
 * @typedef Token
 */
const Token = mongoose.model('Token', tokenSchema);
export {Token};