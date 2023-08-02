 const { Router } = require("express");
 const getActivitiesHandler = require('../handler/getActivitiesHandler')
 const router = Router();


router.get('/activities',getActivitiesHandler)



 module.exports = router;