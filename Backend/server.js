const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes/index.Routes');
const bodyParser = require('body-parser');
const { postgresDB } = require('./config/postgresDB');

dotenv.config();
postgresDB();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', routes);

app.listen(port, err => !err && console.log(`Server is running on http://localhost:${port}`));