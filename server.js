const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Bodyparser middleware
app.use(bodyParser.json());

// Database config
const configDB = require('./config/database.js');

// Connect to Mongo
mongoose
  .connect(configDB.mongoURI)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

const port = process.env.PORT || 7000;

app.listen(port, () => console.log(`The magic happens on port ${port}`));