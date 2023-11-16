import Service from '../models/service.js' 

class ServiceController {

    constructor() { }

    getAll = async (req, res, next) => {
        try {
            const services = await Service.find();
            res.json(services);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener los servicios' });
        }
    };

      // Crear un servicio nuevo
    createService = async (req, res, next) => {
        try {
            const newService = await Service.create(req.body);
            res.status(201).json(newService);
        } catch (error) {
            res.status(500).json({ error: 'Error al crear el servicio' });
        }
    };

    // Obtener un servicio por ID
    getServiceById = async (req, res, next) => {
        try {
            const service = await Service.findById(req.params.id);
        if (!service) {
            return res.status(404).json({ error: 'Servicio no encontrado' });
        }
            res.json(service);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener el servicio' });
        }
    };

    // Actualizar un servicio por ID
    updateService = async (req, res, next) => {
        try {
            const updatedService = await Service.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            if (!updatedService) {
                return res.status(404).json({ error: 'Servicio no encontrado' });
            }
            res.json(updatedService);
        } catch (error) {
            res.status(500).json({ error: 'Error al actualizar el servicio' });
        }
    };

    // Eliminar un servicio por ID
    deleteService = async (req, res, next) => {
        try {
            const deletedService = await Service.findByIdAndDelete(req.params.id);
        if (!deletedService) {
            return res.status(404).json({ error: 'Servicio no encontrado' });
        }
            res.json(deletedService);
        } catch (error) {
            res.status(500).json({ error: 'Error al eliminar el servicio' });
        }
    };

}

export default ServiceController