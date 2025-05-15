const express = require('express');
const authRoutes = require('./sub.Routes/auth.Routes');

const routes = express.Router();

routes.use('/', authRoutes);

module.exports = routes;