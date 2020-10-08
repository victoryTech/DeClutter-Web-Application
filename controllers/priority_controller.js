// importing database
const db = require('../config/mongoose') ;
const TasksList = require('../models/task') ;

// important priority controller
module.exports.imp=function(req,res){

    TasksList.find({priority : "imp"} ,function(err, tasks){
        if(err){
            console.log('error in fetching contact from db') ;
            return ;
        }

        return res.render('home' , {
            title : "To Do List" , 
            task_list :  tasks ,
            sub_title : "Important Tasks"
        }) ;

    }).sort({striked: 1});
};

// urgent priority controller
module.exports.urgent=function(req,res){
    TasksList.find({priority : "urgent"} ,function(err, tasks){
        if(err){
            console.log('error in fetching contact from db') ;
            return ;
        }

        return res.render('home' , {
            title : "To Do List" , 
            task_list :  tasks ,
            sub_title : "Urgent Tasks"
        }) ;

    }).sort({striked: 1});
};

// not urgent priority controller
module.exports.notUrgent=function(req,res){
    TasksList.find({priority : "notUrgent"} ,function(err, tasks){
        if(err){
            console.log('error in fetching contact from db') ;
            return ;
        }

        return res.render('home' , {
            title : "To Do List" , 
            task_list :  tasks ,
            sub_title : "Not Urgent Tasks"
        }) ;

    }).sort({striked: 1});
};

// not imp priority controller

module.exports.notImp=function(req,res){
    TasksList.find({priority : "notImp"} ,function(err, tasks){
        if(err){
            console.log('error in fetching contact from db') ;
            return ;
        }

        return res.render('home' , {
            title : "To Do List" , 
            task_list :  tasks ,
            sub_title : "Not Important Tasks"
        }) ;

    }).sort({striked: 1}); 
};