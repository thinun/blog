import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connection = {};

const connectToDb = async () => {
    try {
        if (connection.isConnected) {
            console.log('Using existing connection');
            return;
        }
        const db = await mongoose.connect(process.env.MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        connection.isConnected = db.connections[0].readyState;

        console.log('Connected to MongoDB');

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw new Error(error);
    }
};

export default connectToDb;
