import User from '../models/user.js';
import { 
    OK,
    CREATED,
    BAD_REQUEST,
} from '../utils/contsants.js';

const createOrUpdateUser = async (req, res) => {
    const { name, email, picture } = req.user;

    // * get user by email, then update name & picture
    // * new => return the updated user info, otherwise, you might get old info
    const user = await User.findOneAndUpdate(
        { email }, 
        { name: email.split('@')[0], picture },
        { new: true }
    );

    // * @scenario => if user exist, then update it, otherwise, create new one
    if (user) {
        console.log('USER UPDATED', user);

        res.status(OK).json(user);
    } else {
        const newUser = await new User({
            name: email.split('@')[0], 
            email, 
            picture
        }).save();

        console.log('USER CREATED', newUser);
        
        res.status(CREATED).json(newUser);
    }
}

const currentUser = async (req, res) => {
    const { email } = req.user;

    // * `.exec()` gives you a fully-fledged promise
    User.findOne({ email }).exec((err, user) => {
        if (err) {
            return res.status(BAD_REQUEST).json({
                message: err,
            });
        }

        res.status(OK).json(user);
    });
}

export { 
    createOrUpdateUser,
    currentUser,
}