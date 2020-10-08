// handling click event on each task
$(".det-btn").click(function(){

    // fetching all inputs of a task
    let taskName = $(this).attr('data-name') ; 
    let taskDate = $(this).attr('data-date') ; 
    let category = $(this).attr('data-category') ; 
    let priority = $(this).attr('data-priority') ; 
    let description = $(this).attr('data-description') ; 
    let id = $(this).attr('data-id') ;
    let striked = $(this).attr('data-striked') ;

    // populating task detail div
    $("#tnm").html( taskName );
    $("#tdt").html( taskDate );
    $("#tcg").html( category );

    // color coding acc to category
    if(category == "Work"){
        $('.c-btn').css("background-color" , "rgb(143, 7, 143)") ;

    }else if(category == "Personal"){
        $('.c-btn').css("background-color" , "#3D6AB8") ;

    }else if(category == "Study"){
        $('.c-btn').css("background-color" , "#87431d") ;
        
    }else{
        $('.c-btn').css("background-color" , "gray") ;  
    }


    $("#tpr").html( priority );

    // color coding acc to priority
    if(priority == "imp"){
        $('.p-btn').css("background-color" , "#E74C3C") ;

    }else if(priority == "urgent"){
        $('.p-btn').css("background-color" , "#F1C40F") ;

    }else if(priority == "notUrgent"){
        $('.p-btn').css("background-color" , "#3498DB") ;
        
    }else{
        $('.p-btn').css("background-color" , "#2ECC71") ;  
    }

    if(description==""){
        $("#tde").html(".");
    }else{
        $("#tde").html(description);
    }

    // setting href of delete btn so that server request for deleting 
    // can be made
    $("#delete-task-btn").attr('href' , `/delete-task/?id=${id}`) ;


    // handling click event on mark as done btn 
    // two cases already striked or not
    $('#comp-task-btn').click(function() {

        if(striked == "true"){
            
            $("#comp-task-btn").attr('href' , `/uncheck-task/?id=${id}`) ;
        }else{
            $("#comp-task-btn").attr('href' , `/check-task/?id=${id}`) ;
        }
    });
    


}) ; 
