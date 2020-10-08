const mongoose = require('mongoose') ;

// created new schema
const taskSchema = new mongoose.Schema({

    taskName : {
        type: String ,
        required : true
    },

    taskDate : {
        type: String ,
        required: true
    }, 

    category : {
        type: String 
    },

    priority : {
        type: String 
    },

    description : {
        type: String
    },

    created: {
        type: String 
    } ,

    striked: {
        type:Boolean ,
        default:false
    }

}) ;

// creating a model
const Tasks = mongoose.model('Tasks' , taskSchema) ;

// exporting model
module.exports = Tasks ;