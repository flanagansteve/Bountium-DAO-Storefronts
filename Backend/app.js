const express = require("express");
const mongoose = require("mongoose");
var cors = require('cors')

const { mongoURI } = require("./config");

const app = express();

app.use(cors())

mongoose.connect(mongoURI, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const routes = require("./routes")

app.use("/api", routes);

const PORT = process.env.PORT || 3434;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})