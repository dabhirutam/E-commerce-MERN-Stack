const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, 'postgres', 'dabhi_r19', {
    host: 'localhost',
    dialect: 'postgres'
});

const postgresDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Postgres Database Connect");
    } catch (error) { console.log("Server Error", error) }
}

module.exports = { sequelize, postgresDB };