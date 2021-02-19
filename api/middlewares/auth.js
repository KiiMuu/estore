import admin from '../firebase';
import { UNAUTHORIZED } from '../utils/contsants';

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

export { authCheck }