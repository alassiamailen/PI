const {Router} = require('express')
const route= Router();
const getCountriesHandler = require('../handler/getCountriesHandler')

route.get('/countries', getCountriesHandler)


module.exports= route;