import Service from '../models/service.js' 

class ServiceController {

    constructor() { }

    createService = async (req, res, next) => {

        try {
            
            const { name, price } = req.body;

            const newSer = new User({
                name,
                price
            });
        
            // Guarda el usuario en la base de datos
            console.log(newSer)

        } catch (error) {

            res.status(500).json({ error: 'Error creating a service' });
            
        }

      };
   
}



export default ServiceController