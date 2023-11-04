import Category from '../models/category.js' 

class CategoryController {

    constructor() { }

    getAll = async (req, res, next) => {
        try {
            const categories = await Category.find();
            res.json(categories);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener las categorías' });
        }
    };
   
}

export default CategoryController