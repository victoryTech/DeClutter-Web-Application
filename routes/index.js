// same instance of express as that in index js
const express = require('express') ; 

const router = express.Router() ;

// required home controller
const homeController = require('../controllers/home_controller') ; 

// get router
router.get('/' , homeController.home) ;

// for any request with prefix /category
router.use('/category' , require('./category')) ;

// for any request with prefix /priority
router.use('/priority' , require('./priority')) ;

// routers for filtering acc to date
router.get('/today' , homeController.today) ;

router.get('/duePassed' , homeController.duePassed) ;

router.get('/nextSevenDays' , homeController.nextSevenDays ) ;

// post router for adding task
router.post('/addTask' , homeController.addTask) ;

// router for deleting task
router.get('/delete-task' , homeController.deleteTask) ;

// for marking task as complete
router.get('/check-task' , homeController.checkTask) ;

// for unmarking task as complete
router.get('/uncheck-task' , homeController.uncheckTask) ;

// exporting so that it is available to index file 
module.exports = router ;