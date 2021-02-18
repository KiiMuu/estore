import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
config();
import colors from 'colors';
import { readdirSync } from 'fs';

import dbConnection from './config/dbConnection';
import { 
    REQUEST_SIZE_LIMIT 
} from './utils/contsants';

// * app
const app = express();

// * db connection
dbConnection();

// * middlewares
app.use(express.json({ 
    limit: REQUEST_SIZE_LIMIT // * the maximum request body size. Defaults to '100kb'
}));
app.use(morgan('dev'));
app.use(cors());

// * use routes
readdirSync('./routes').map(route => {
    import(`./routes/${route}`).then(r => {
        app.use('/api', r.default)
    });
});

// * app listening
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`App is up on port: ${port}`);
});