const express = require('express');
// const authController = require('../../controllers/auth.Controller');
const adminController = require('../../controllers/admin.Controller');

const adminRoutes = express.Router();

adminRoutes.post('/dashboard', adminController.Dashboard);
adminRoutes.get('/find', adminController.Find);
adminRoutes.get('/delete', adminController.Delete);
adminRoutes.get('/update', adminController.Update);

module.exports = adminRoutes;