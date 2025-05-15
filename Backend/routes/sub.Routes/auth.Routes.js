const express = require('express');
const authController = require('../../controllers/auth.Controller');

const authRoutes = express.Router();

authRoutes.post('/signup', authController.SignUp);

authRoutes.post('/signin', authController.SignIn);

module.exports = authRoutes;