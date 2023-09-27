const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const  DB_URL = 'mongodb+srv://farmsell:farmsell@cluster0.mh36s.mongodb.net/moonData';

const {moonDataRoutes} = require('./routes/moon.route');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(moonDataRoutes);
// require("dotenv").config();
// const {shipmentRoute} =require('./routes/shipment.route');



// app.use(function (req, res, next) {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader(
//         "Access-Control-Allow-Methods",
//         "OPTIONS, GET, POST, PUT, PATCH, DELETE"
//     );
//     res.setHeader("Access-Control-Allow-Headers", "*");
//     res.setHeader("Access-Control-Allow-Credentials", true);
//     next();
// });

// app.use(shipmentRoute);

app.all("*", (req, res, next) => {
    res.status(404).json({
        message:"Page not found"
    });
});


mongoose
    .connect(DB_URL)
    .then((db) => {
    console.log("DB Connected");
    app.listen(3000, () => {
    console.log(`Server started on 3000.`);
    });
})
    .catch((error) => {
    console.log(error);
});  