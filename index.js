const express = require('express')
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;

// To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }));
// To parse json data
app.use(bodyParser.json());

// ... Configurations
app.use(morgan('common'));

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`);
});
