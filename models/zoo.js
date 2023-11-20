const mongoose = require('mongoose');

const Schema = mongoose.Schema

const zooSchema = new Schema(
    {
        zone: {
            type: String,
            enum: ['Cold', 'Safari', 'Desert'],
            default: "Select zone"
        },
        species: {
            type: [String],
            enum: ['Fish', 'Mammal', 'Arachnid', 'Reptile'],
            default: 'Mammal',
        },

    }
)
const Zoo = mongoose.module('Zoo',zooSchema)
module.exports = Zoo;
