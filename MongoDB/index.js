const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.use('/flights', require('./routes/flight.route'));

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Successfully connect to MongoDB!');
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
const conn = mongoose.connection;

conn.on('disconnected', () => {
    console.log('Database is disconnected successfully.')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
})
