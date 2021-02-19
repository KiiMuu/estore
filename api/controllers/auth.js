import User from '../models/user';
import { 
    OK,
    CREATED 
} from '../utils/contsants';

const createOrUpdateUser = async (req, res) => {
    const { name, email, picture } = req.user;

    // * get user by email, then update name & picture
    // * new => return the updated user info, otherwise, you might get old info
    const user = await User.findOneAndUpdate(
        { email }, 
        { name, picture }, 
        { new: true }
    );

    // * @scenario => if user exist, then update it, otherwise, create new one
    if (user) {
        console.log('USER UPDATED', user);

        res.status(OK).json(user);
    } else {
        const newUser = await new User({
            name, email, picture
        }).save();

        console.log('USER CREATED', newUser);
        
        res.status(CREATED).json(newUser);
    }
}

export { createOrUpdateUser }