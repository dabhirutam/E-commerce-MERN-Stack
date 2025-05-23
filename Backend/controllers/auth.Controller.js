const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authModel = require('../models/auth.Model');


const SignUp = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) return res.status(400).json({ status: false, msg: 'Missing required field' });

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

        const auth = await authModel.findAll();

        console.log("AUTH", auth);
        

        if (auth.length !== 0) return res.status(404).json({ status: false, msg: 'User not found' });

        if (bcrypt.compare(auth.password, password)) {
            const token = jwt.sign({ id: auth._id, role: auth.role }, 'E-commerce-token');
            res.status(200).json({ status: true, msg: 'Login successful', token, auth: auth[0] });

            console.log("'User is logIn successfully.");
        } else return res.status(401).json({ status: false, msg: 'Invalid or expired token' });

    } catch (error) {
        console.log("Server error", error);
        return res.status(500).json({ status: false, msg: "Server error." });
    }
}

module.exports = {
    SignUp,
    SignIn
}