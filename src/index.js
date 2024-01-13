// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
    path: './env'
})

// const app = express();

connectDB().then(
    ()=>{
        app.listen(process.env.PORT || 8000, ()=>{
            console.log(`Server is Running at http://localhost:${process.env.PORT}`);
        }) 
    }
).catch((error)=>{
    console.log("MONGODB Connection failed", error);
})



/*
; (async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("DB Connect Successfully");
        app.on("error", (error) => {
            console.log("express Server error", error);
            throw error;
        });
        app.listen(process.env.PORT, () => {
            console.log(`Server Started Sucessfully on http://localhost:${process.env.PORT}`);
        });
    } catch (error) {
        console.error("ERROR:", error);
        throw error;
    }
})()
*/