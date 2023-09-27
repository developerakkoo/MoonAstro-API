const mongoose = require ('mongoose');
const moment = require('moment');
const Schema = mongoose.Schema;

const moonDataSchema = new Schema({
    current_sign:{
        type : Number,
        require: true
    },
    fullDegree:{
        type : Number,
        require: true
    },
    normDegree:{
        type : Number,
        require: true
    },
    date:{
        type : String,
        require: true
    },
    month:{
        type : String,
        require: true
    },
    year:{
        type : String,
        require: true
    },
    createdAt:{
        type : String,
        default: moment().format('LLLL')
    },
    updatedAt: {
        type: String,
        default: moment().format('LLLL')
    }
    });
    
    module.exports = mongoose.model("MoonData",moonDataSchema);