import mongoose from 'mongoose';

const dbConnection = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        });

        console.log(`DB connected: ${conn.connection.host}`.green.underline);
    } catch (err) {
        console.error(`ERROR: ${err.message}`.red.underline.bold);

        process.exit(1);
    }
}

export default dbConnection;