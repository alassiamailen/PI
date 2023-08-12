 const { Router } = require("express");
 const postActivities = require('../handler/postActivitiesHandler')
 const router = Router();


router.post('/activities',postActivities)


 module.exports = router;