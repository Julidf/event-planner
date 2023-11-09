import mongoose from 'mongoose';
import {toJSON} from './plugins/toJson.js';
import {paginate}  from './plugins/paginate.js';

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: false,
        trim: true,
    },
    picture: {
        type: String,
        required: false,
        trim: true,
    }
});

// Agrega el plugin de conversion de mongoose a json
categorySchema.plugin(toJSON);
// Agrega el plugin de paginacion
categorySchema.plugin(paginate);

const Category = mongoose.model('Category', categorySchema);

export default Category