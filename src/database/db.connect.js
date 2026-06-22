import mongoose from 'mongoose';
import config from '../config/env.config.js';

if (!config.database_uri) {
    throw new Error('MongoDB uri not define in environment variables');
}

const dbConnect = async () => {
    try {
        const uri = config.database_uri;

        await mongoose.connection.on('connected', () => {
            console.log('mongoose connected successfully');
        });

        await mongoose.connection.on('error', err => {
            console.error('mongoose connection failure', err.message);
        });

        await mongoose.connect(uri);
    } catch (error) {
        console.error('mongoose connection error', error.message);
        process.exit(1);
    }
};

export default dbConnect;
