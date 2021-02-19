import admin from '../firebase';

const protectRoute = (req, res, next) => {
    console.log(req.headers);

    next();
}

export { protectRoute }