const express = require('express');
const authController = require('../../controllers/auth.Controller');
const adminController = require('../../controllers/admin.Controller');

const adminRoutes = express.Router();

adminRoutes.post('/dashboard', adminController.Dashboard);

module.exports = adminRoutes;