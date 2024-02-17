require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app =express();
const MONGO_CONNECTION = process.env.MONGO_CONNECTION;
const weatherrouter = require("./routes/weatherRoute");

app.use(express.json());

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/api",weatherrouter);

mongoose.connect(MONGO_CONNECTION)
.then(()=>{
    console.log("connected to mongodb cloud");
    app.listen(3000,()=>{
        console.log("Weather api app is running on port 3000");
    });
})
.catch((error)=>{
    console.log(error);
});

