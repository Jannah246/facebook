import mongoose, { ConnectOptions } from 'mongoose';

const connectDB = async (): Promise<void> => {
    if (mongoose?.connections[0]?.readyState) return;
    try {
        const mongoUri: string = process.env.MONGO_URL as string;
        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions);
        console.log("Connected to mongodb taskmanagement.");
    } catch (error) {
        console.error("Error while connecting to mongodb: ", error);
    }
}

export default connectDB;