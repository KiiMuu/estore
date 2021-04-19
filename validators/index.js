import { validationResult } from 'express-validator';
import { UNPROCESSABLE_ENTITY } from '../utils/contsants.js';

const runValidation = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(UNPROCESSABLE_ENTITY).json({
            message: errors.array()[0].msg
        });
    }

    next();
}

export { runValidation }