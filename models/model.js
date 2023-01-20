const { text } = require('express');
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    
    name: {
        required: true,
        type: String
    },
    lastName: {
        required: true,
        type: String
    },
    MotherName: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    },
    birthday: {
        required: true,
        type: Number
    },
    status: {
        required: true,
        type: String
    },
    phone: {
        required: true,
        type: Number
    },
    country: {
        required: true,
        type: String
    },
    state: {
        required: true,
        type: String
    },
    municipality: {
        required: true,
        type: String
    },
    city: {
        required: true,
        type: String
    },
    cp: {
        required: true,
        type: Number
    },
    languaje: {
        required: true,
        type: String
    },
    hobby: {
        required: true,
        type: String
    },
    preferences: {
        required: true,
        type: String
    },

})

module.exports = mongoose.model('Data', dataSchema)