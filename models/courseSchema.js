const mongoose = require('mongoose');
const courseSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    id:{
        type: Number,
        required: true
    },
    discription:{
        type:String,
        required: true
    },
    points:{
        type:Number,
        required: true
    },
    status:{
        type:Boolean,
        default:false,
        required: true
    },
    duration:{
        type:String,
        required: true
    },
    url:{
        type:String,
        required: true
    }
})


const Course= mongoose.model('cources',courseSchema)
module.exports = Course