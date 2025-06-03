const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authModel = require('../models/auth.Model');
const { sequelize } = require('../config/postgresDB');

const SignUp = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) return res.status(400).json({ status: false, msg: 'Missing required field' });

        sequelize.sync();

        if ((await authModel.findAll({ where: { email } })).length !== 0) return res.status(409).json({ status: false, msg: 'User with this email already exists' });

        await authModel.create({ ...req.body, password: await bcrypt.hash(password, 10), role: 'administrator' });

        res.status(200).json({ status: true, msg: 'User is created successfully.' });

        console.log("User is created successfully.");
    } catch (error) {
        console.log("Server error", error);
        return res.status(500).json({ status: false, msg: "Server error." });
    }
}

const SignIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) return res.status(400).json({ status: false, msg: 'Missing required field' });

        const rec = await authModel.findAll({where: { email }});

        if (rec.length === 0) return res.status(404).json({ status: false, msg: 'User not found' });

        const auth = rec[0].dataValues;       

        if (await bcrypt.compare(password, auth.password)) {
            const token = jwt.sign({ id: auth._id, role: auth.role }, 'E-commerce-token');
            
            res.status(200).json({ status: true, msg: 'Login successful', token, auth: auth });

            console.log("'User is logIn successfully.");
        } else return res.status(403).json({ status: false, msg: 'Incorrect password' });

    } catch (error) {
        console.log("Server error", error);
        return res.status(500).json({ status: false, msg: "Server error." });
    }
}

module.exports = {
    SignUp,
    SignIn
}