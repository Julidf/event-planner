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

    // Obtener un servicio por ID
    getcategoryById = async (req, res, next) => {
        try {
            const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ error: 'Categoria no encontrado' });
        }
            res.json(category);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener category' + error.message });
        }
    };
   
}

export default CategoryController