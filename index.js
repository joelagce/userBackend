require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const app = express();

const mongoString = process.env.MONGO_URL;
mongoose.set("strictQuery", false);
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})


// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

app.use(cors())
app.use(express.json());
app.set('view engine', 'ejs');
const routes = require('./routes/routes');

app.use('/api', routes)


app.listen(process.env.PORT || 3000, () => {
    console.log(`Server Started at ${3000}`)
})