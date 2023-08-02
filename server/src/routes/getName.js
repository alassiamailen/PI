 const { Router } = require("express");
 const getNameHandler = require('../handler/getNameHandler')
 const router = Router();

router.get('/countries/name?',getNameHandler)



 module.exports = router;