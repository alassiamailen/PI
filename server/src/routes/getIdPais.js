const { Router } = require("express");
const getIdPaisHandler = require('../handler/getIdPaisHandler')
const router = Router();

router.get('/countries/:id',getIdPaisHandler)


module.exports = router;