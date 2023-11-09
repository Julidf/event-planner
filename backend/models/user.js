import mongoose from 'mongoose';
import bcrypt  from 'bcryptjs';
import {toJSON} from './plugins/toJson.js';
import {paginate}  from './plugins/paginate.js';
import {roles} from '../config/roles.js';

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        surname: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
            trim: true,
            minlength: 8,
            private: true, // utilizado por el plugin toJSON 
        },
        role: {
            type: String,
            enum: roles,
            default: 'user',
        },
        isEmailVerified: {
            type: Boolean,
            default: false,
          },
    },
    {
        timestamps: true,
    }
);

// Agrega el plugin de conversion de mongoose a json
userSchema.plugin(toJSON);
// Agrega el plugin de paginacion
userSchema.plugin(paginate);

/**
 * Chequea si el email esta en uso
 * @param {string} email - Email
 * @param {ObjectId} [excludeUserId] - Id del usuario a excluir de la busqueda
 * @returns {Promise<boolean>}
 */
userSchema.statics.isEmailTaken = async function (email, excludeUserId) {
    const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
    return !!user;
};
  
/**
 * Valida la contraseña del usuario
 * @param {string} password
 * @returns {Promise<boolean>}
 */
userSchema.methods.isPasswordMatch = async function (password) {
    const user = this;
    return bcrypt.compare(password, user.password);
};

userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

/**
 * @typedef User
 */
const User = mongoose.model('User', userSchema);

export default User