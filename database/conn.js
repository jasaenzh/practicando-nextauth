import mongoose from 'mongoose';

const connectMongo = async () => {
    try {

        const { connection } = await mongoose.connect(process.env.MONGODB_URI)
        // Si devuelve 1 es que esta conectado
        if (connection.readyState === 1) {
            return Promise.resolve(true);
        }

    } catch (error) {
        return Promise.reject(error);
    }
}

export default connectMongo;