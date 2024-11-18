import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
    path:".env"
});

const databaseConnection = async() => {
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("MongoDb connected successfully");
    }).catch((error)=>{
        console.log(error);
    })
};
export default databaseConnection;