import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connection = {};

const connectToDb = async () => {
    if (connection.isConnected) {
        console.log('Using existing database connection');
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        connection.isConnected = db.connections[0].readyState;
        console.log('Connected to the database:', db.connections[0].name);
    } catch (error) {
        console.error('Database connection error:', error);
        throw new Error('Failed to connect to the database');
    }
};

export default connectToDb;
