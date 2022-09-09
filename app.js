import mongoose from 'mongoose';
import express from 'express';
import dotenv from "dotenv";
import userRouter from './routes/userRouter.js';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
app.use(bodyParser.json());

dotenv.config();

app.use(function (req, res, next) {
    express.json();
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

const connectionToDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connection succesful");
    }catch (error){
        console.error(error);
    }
}

app.use("/api", userRouter);

app.listen(port, () => {
    connectionToDb();
    console.log(`Server listening to ${port}`);
});

