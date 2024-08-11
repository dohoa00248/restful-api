// old
// const express = require("express");
// new
import express from "express";
import { configDotenv } from "dotenv";
import routes from "./routes/index.route.js";
import dbConnect from "./config/db.connect.js";
const app = express();

// Load environment variables from .env file
configDotenv();
// console.log("Check env", process.env);

//config hostname, port for app
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

//config req.body midleware
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data

//config routes
routes(app);

// app.get('/', (req, res) => {
//     res.send("Hello admin");
// })

//Connect to database
dbConnect.connectToMongoDB();
dbConnect.connectToMongoDBByMongoose();
dbConnect.connectToMySQL();
dbConnect.connectToMySQLBySequelize();
dbConnect.synchronizeModels();

app.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
});