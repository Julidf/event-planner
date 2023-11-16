import mongoose  from 'mongoose';
import {toJSON}  from './plugins/toJson.js';
import {paginate}  from './plugins/paginate.js';

const reviewSchema = mongoose.Schema(
    {
        owner: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User',
            required: true,
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        stars: {
            type: Number,
            required: true,
            min: 0,
            max: 5,
            index: true,
        },
        date: {
            type: Date,
            required: true,
        },
});

const serviceSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    owner: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    category: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Category',
      required: true,
      index: true,
    },
    premium: {
        type: Boolean,
        default: false,
        index: true,
    },
   /*  priceType: {
        type: String,
        enum: [priceTypes.PERHOUR, priceTypes.PERPERSON, priceTypes.PERSTAFF, priceTypes.SPECIAL],
        required: true,
    }, */
    offer: [{  
        description: {
            type: String,
            required: true,
            trim: true
        },  
        price: {
            type: Number,
            required: true,
            min: 0,
        }
    }],
    country: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        trim: true
    },
    picture: {
        type: String,
    },
    expires: {
      type: Date,
    },
    reviews: [reviewSchema],
    rank: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
    },
  },
  {
    timestamps: true,
  }
);

/* const priceTypes = {
    PERHOUR: 'perHour',
    PERPERSON: 'perPerson',
    PERSTAFF: 'perStaff',
    SPECIAL: 'special',
}; */
// Agrega el plugin de conversion de mongoose a json
serviceSchema.plugin(toJSON);
reviewSchema.plugin(toJSON);
// Agrega el plugin de paginacion
serviceSchema.plugin(paginate);
reviewSchema.plugin(paginate);

/**
 * @typedef Service
 */
const Service = mongoose.model('Service', serviceSchema);
/**
 * @typedef Review
 */
const Review = mongoose.model('Review', reviewSchema);
export default Service; //priceTypes and review