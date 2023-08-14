const {Router} = require("express");
const deleteActivitiesHandler= require("../handler/deleteActivitiesHandler");
const router = Router();


router.get(`/delete/:id`,deleteActivitiesHandler)

module.exports=router;