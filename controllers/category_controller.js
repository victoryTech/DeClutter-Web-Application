// importing database
const db = require('../config/mongoose') ;
const TasksList = require('../models/task') ;

// controllers for each category
// 1. study
module.exports.study=function(req,res){

    TasksList.find({category : "Study"} ,function(err, tasks){
        if(err){
            console.log('error in fetching contact from db') ;
            return ;
        }

        return res.render('home' , {
            title : "To Do List" , 
            task_list :  tasks ,
            sub_title : "Study Tasks"
        }) ;

    }).sort({striked: 1});
};

// 2. personal
module.exports.personal=function(req,res){
    TasksList.find({category : "Personal"} ,function(err, tasks){
        if(err){
            console.log('error in fetching contact from db') ;
            return ;
        }

        return res.render('home' , {
            title : "To Do List" , 
            task_list :  tasks ,
            sub_title : "Personal Tasks"
        }) ;

    }).sort({striked: 1});
};

// 3. work
module.exports.work=function(req,res){
    TasksList.find({category: "Work"} ,function(err, tasks){
        if(err){
            console.log('error in fetching contact from db') ;
            return ;
        }

        return res.render('home' , {
            title : "To Do List" , 
            task_list :  tasks ,
            sub_title : "Work Tasks"
        }) ;

    }).sort({striked: 1});
};

// 4. other
module.exports.other=function(req,res){
    TasksList.find({category: "Other"} ,function(err, tasks){
        if(err){
            console.log('error in fetching contact from db') ;
            return ;
        }

        return res.render('home' , {
            title : "To Do List" , 
            task_list :  tasks ,
            sub_title : "Other Tasks"
        }) ;

    }).sort({striked: 1}); 
};