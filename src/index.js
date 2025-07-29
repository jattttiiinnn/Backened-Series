//require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "../src/db/index.js";

dotenv.config({
    path: './env'
})

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port : ${process.env.PORT || 8000}`);
        });
    })
    .catch((err) => {
        console.log("Mongo db connection failed !!! ", err);
    });