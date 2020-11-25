const express = require("express");
const app = express();

const plantRoutes = require('./api/routes/plants');



//Sets up a middleware so incoming requests have to go through whatever is passed into use
app.use('/plants', plantRoutes);

module.exports = app;
