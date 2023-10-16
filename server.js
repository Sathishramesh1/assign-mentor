const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("dotenv").config();

//Importing the models
const Mentor = require("./models/Mentor");
const Student = require("./models/Student");

const app = express();

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

app.use(bodyParser.json());


//connecting to MongoDB
mongoose
  .connect(DB_URL, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));
