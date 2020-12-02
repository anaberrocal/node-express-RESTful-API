const express = require("express");
const app = express();
const morgan = require('morgan');

const plantRoutes = require('./api/routes/plants');
const ordersRoutes = require('./api/routes/orders');

app.use(morgan('dev'));

//Sets up a middleware so incoming requests have to go through whatever is passed into use
app.use('/plants', plantRoutes);
app.use('/orders', ordersRoutes);

app.use((req, res, next) => {
    const error = new Error('Nada');
    error.status(404);
    next(error);
})

app.use((error, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;
