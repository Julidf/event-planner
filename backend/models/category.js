import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    picture: {
        type: String,
        required: false,
    }
});

const Category = mongoose.model('Category', categorySchema);

export default Category