import mongoose  from 'mongoose';
import {toJSON}  from './plugins/toJson.js';
import {paginate}  from './plugins/paginate.js';

const pactSchema = mongoose.Schema(
    {
        service: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Service',
            required: true,
            index: true,
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        finalPrice: {
            type: Number,
            required: true,
        },
        userAccepted: {
            type: Boolean,
        },
        serviceAccepted: {
            type: Boolean,
        },
        chat: [{  
            message: {
                type: String,
                required: true,
                trim: true
            },  
            isUser: {
                type: Boolean,
                required: true,
            },  
            timestamps: {
                type: Date,
                default: Date.now(),
            }
        }],
});

const bundleSchema = mongoose.Schema(
  {
    Pack: [pactSchema],
    owner: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    comment: {
        type: String,
        trim: true
    },
    stars: {
        type: Number,
        min: 0,
        max: 5,
    },
    botHistory: {
        type: String,
        trim: true   
    },
    completed: {
        type: Boolean,
    },
    completedAt: {
        type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// Agrega el plugin de conversion de mongoose a json
servicePactSchema.plugin(toJSON);
bundleSchema.plugin(toJSON);
// Agrega el plugin de paginacion
servicePactSchema.plugin(paginate);
bundleSchema.plugin(paginate);

/**
 * @typedef Pact
 */
const Pact = mongoose.model('Pact', pactSchema);
/**
 * @typedef Bundle
 */
const Bundle = mongoose.model('Bundle', bundleSchema);
export {Pact, Bundle};