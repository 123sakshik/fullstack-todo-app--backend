// Importing the required libraries
const express = require('express');
const mongoose = require('mongoose');
const Cors = require("cors")
// Importing the custom routes module
const routes = require('./routes/TODoRoute');

// Importing the environment variables
require('dotenv').config();

// Creating an instance of the Express.js application
const app = express();

// Setting the port number
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(Cors())
// Connecting to the MongoDB database
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log(`Connected TO MongoDB...`))
  .catch((err) => console.log(err));

// Registering the custom routes
app.use(routes);

// Starting the server and listening for incoming HTTP requests
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});