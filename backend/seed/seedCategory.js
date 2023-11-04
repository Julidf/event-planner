import Category from '../models/category.js';

//imágenes de Unsplash
const categoryData = [
    { name: 'Música', description: 'Djs, Bandas en vivo, Karaoke', picture: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Salones', description: 'Salones de fiestas, conferencias, Quintas ', picture: 'https://images.unsplash.com/photo-1620735692151-26a7e0748429?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Fotografía', description: 'Fotógrafo/a, Cabina de fotos, Books', picture: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Catering', description: 'Servicio de catering, Lunchs, Tortas', picture: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Estética', description: 'Peinados, Maquillaje, Manicuría', picture: 'https://images.unsplash.com/photo-1549236177-77e8271c34b6?auto=format&fit=crop&q=80&w=1372&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Personal', description: 'Bartender, Camarera/o, Seguridad', picture: 'https://images.unsplash.com/photo-1516788875874-c5912cae7b43?auto=format&fit=crop&q=80&w=1473&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

// Función para insertar los datos
const seedCategory = async () => {
    try {
        await Category.deleteMany({});
        await Category.insertMany(categoryData);
        console.log('SERVICIOS CARGADOS CON ÉXITO');
    } catch (error) {
        console.error('Error al insertar datos de servicios:', error);
    }
  };
  
export default seedCategory;
