// importing database
const db = require('../config/mongoose') ;
const TasksList = require('../models/task') ;

// some logic for checking whether task is due today or in next 7 days
const today = new Date();
if(today.getMonth() + 1 >= 10){
    var date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' +  today.getDate();
    var nextSeven = today.getFullYear() + '-' + (today.getMonth()+1) + '-' +  (today.getDate()+7) ;
}else{
    var date = today.getFullYear() + "-0" + (today.getMonth()+1) + '-' +  today.getDate();
    var nextSeven = today.getFullYear() + '-0' + (today.getMonth()+1) + '-' +  (today.getDate()+7)
}

// home page controller
module.exports.home = function(req,res){

    TasksList.find({} ,function(err, tasks){
        if(err){
            console.log('error in fetching contact from db') ;
            return ;
        }

        return res.render('home' , {
            title : "To Do List" , 
            task_list :  tasks ,
            sub_title : "All Tasks"
        });

    }).sort({striked: 1}).sort({taskDate : 1}); 
    // sorting acc to two things due date (ascending) and if it is not completed

};

// controller for adding task
module.exports.addTask = function(req,res){

    TasksList.create({
        
        taskName : req.body.taskName ,
        taskDate : req.body.taskDate ,
        category : req.body.category ,
        description : req.body.description ,
        priority : req.body.priority ,
        created : req.body.taskDate 

    }, function(err, newTask){

        if(err){
            console.log('err in creating task') ;
            return ;
        }
        return res.redirect('back') ;

    });
};

// for deleting task
module.exports.deleteTask = function(req,res){
    let id = req.query.id ;

    TasksList.findByIdAndDelete(id , function(err){

        if(err){
            console.log("err in del task from db") ;
            return ;
        }

        return res.redirect('back') ;
    });

} ;

// updating boolean value of striked
module.exports.checkTask = function(req,res){
    let id = req.query.id ;

    TasksList.findByIdAndUpdate(id , {striked : 'true'} , function(err){

        if(err){
            console.log("err in updating task from db") ;
            return ;
        }

        return res.redirect('back') ;
    });

};

module.exports.uncheckTask = function(req,res){
    let id = req.query.id ;

    TasksList.findByIdAndUpdate(id , {striked : "false"} , function(err){

        if(err){
            console.log("err in updating task from db") ;
            return ;
        }

        return res.redirect('back') ;
    });

};

// for rendering due today tasks
module.exports.today=function(req,res){
    
    TasksList.find({created: {$eq: date}} ,function(err, tasks){

        if(err){
            console.log('error in fetching contact from db') ;
            return ;
        }

        return res.render('home' , {
            title : "To Do List" , 
            task_list :  tasks ,
            sub_title : "Due Today"
        }) ;

    }).sort({striked: 1});

};

// for rendering due date passed tasks
module.exports.duePassed=function(req,res){
    
    TasksList.find({created: {$lt: date}} ,function(err, tasks){

        if(err){
            console.log('error in fetching contact from db') ;
            return ;
        }

        return res.render('home' , {
            title : "To Do List" , 
            task_list :  tasks ,
            sub_title : "Due Date Passed"
        }) ;

    }).sort({striked: 1});

};

// due in 7 days
module.exports.nextSevenDays=function(req,res){

    TasksList.find({created: {$gt: date , $lte :nextSeven}} ,function(err, tasks){

        if(err){
            console.log('error in fetching contact from db') ;
            return ;
        }

        return res.render('home' , {
            title : "To Do List" , 
            task_list :  tasks ,
            sub_title : "Due in 7 Days"
        }) ;

    }).sort({striked: 1});

};