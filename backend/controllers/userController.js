import User from '../models/user.js' 
import { logger } from '../config/logger.js'

class UserController {

    constructor() { }

    createUser = async (req, res, next) => {

        try {
            
            const { name, surname, email, password, isProvider } = req.body;

            const newUser = new User({
                name,
                surname,
                email,
                password,
                isProvider,
            });
        
            // Guarda el usuario en la base de datos
            const savedUser = await newUser.save();
        
            res.status(201).json(savedUser);

        } catch (error) {

            res.status(500).json({ error: 'Error creating a user' });
            
        }

      };
      
}
 
export default UserController