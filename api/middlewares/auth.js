import admin from '../firebase/index.js';
import User from '../models/user.js';
import { UNAUTHORIZED } from '../utils/contsants.js';

const authCheck = async (req, res, next) => {
    try {
        // ? get user token from frontend
        const firebaseUser = await admin.auth().verifyIdToken(req.headers.authtoken);

        req.user = firebaseUser;

        next();
    } catch (err) {
        console.error(err);

        res.status(UNAUTHORIZED).json({
            message: 'Invalid or expired token'
        });
    }
}

const adminCheck = async (req, res, next) => {
    const { email } = req.user;

    const adminUser = await User.findOne({ email }).exec();

    if (adminUser.role !== 'admin') {
        res.status(UNAUTHORIZED).json({
            message: 'Admin resource. Access denied.'
        });
    } else {
        next();
    }
}

export { authCheck, adminCheck }