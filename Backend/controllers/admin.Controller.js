// const User = require("../models/user.Model");
const { sequelize } = require("../config/postgresDB");

const Dashboard = async (req, res) => {
    const {username, email, password} = req.body;
    try {
        await sequelize.sync();
        // const jane = await User.create({ username, password, email, role: 'admin' });
        res.status(200).json({ status: true, msg: 'Welcome Admistor Dashboard', user: jane });
    } catch (error) {
        console.log("ERRR", error);
        return res.status(500).json({ status: false, msg: "Server error." })
    }
}

const Find = async (req, res) => {
    try {
        // const users = await User.findAll();
        res.status(200).json({ status: true, msg: 'All users', users });
    } catch (error) {
        console.log("ERRR", error);
        return res.status(500).json({ status: false, msg: "Server error." })
    }
}

const Update = async (req, res) => {
    try {
        // const user = await User.findByPk(2)

        // await user.update({
        //     name: 'Ankur'
        // });
        res.status(200).json({ status: true, msg: 'User upadetd.' });
    } catch (error) {
        console.log("ERRR", error);
        return res.status(500).json({ status: false, msg: "Server error." })
    }
}

const Delete = async (req, res) => {
    try {
        // await User.destroy({
        //     where: {
        //         id: 1,
        //     }
        // });
        res.status(200).json({ status: true, msg: 'User deleted.' });
    } catch (error) {
        console.log("ERRR", error);
        return res.status(500).json({ status: false, msg: "Server error." })
    }
}

module.exports = {
    Dashboard,
    Find,
    Delete,
    Update
}