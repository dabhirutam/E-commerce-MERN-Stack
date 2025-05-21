const { DataTypes } = require('sequelize');
const { sequelize } = require("../config/postgresDB");

const authModel = sequelize.define('User', {
    username: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'user',
        validate: {
            isIn: [['administrator', 'admin', 'user']],
        }
    }
}, {
    tableName: 'users',
    timestamps: true,
});

module.exports = authModel;