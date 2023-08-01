const {Router} = require('express')
const route= Router();
const getCountries = require('../handler/getCountriesHandler')

route.get('/countries',(req,res)=>{
    res.status(200).send('Countries Ok');
})


module.exports={
    route
}