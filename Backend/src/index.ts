import express, {Request, Response} from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import mongoose from 'mongoose';

dotenv.config()

const connectMongoDB = async () => {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => console.log("Connected to database!"));
};

connectMongoDB();
    
const app = express();
app.use(express.json());
app.use(cors())

app.get('/test', async (req:Request, res:Response) => {
    res.json({message: "Hello!"})
});

app.listen(7000, () => {
    console.log("Server started on localhost: 7000")
});