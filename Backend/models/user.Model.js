const { DataTypes } = require('sequelize');
const { sequelize } = require("../config/postgresDB");

const User = sequelize.define('User', {
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    //   favoriteColor: {
    //     type: DataTypes.TEXT,
    //     defaultValue: 'green',
    //   },
    //   age: DataTypes.INTEGER,
    //   cash: DataTypes.INTEGER,
},{
    tableName: 'users'
});

module.exports = User;