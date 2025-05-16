const express = require('express');
const authRoutes = require('./sub.Routes/auth.Routes');
const adminRoutes = require('./sub.Routes/admin.Routes');

const routes = express.Router();

routes.use('/', authRoutes);
routes.use('/admin', adminRoutes);

module.exports = routes;