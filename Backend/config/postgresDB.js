const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('E-commerce', 'postgres', 'dabhi_r19', {
    host: 'localhost',
    dialect: 'postgres'
});

const postgresDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Postgres Database Connect");
    } catch (error) { console.log("Server Error", error) }
}

module.exports = postgresDB;