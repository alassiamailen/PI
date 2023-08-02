const {Country} = require('../db');

const getCountriesControllers =async()=>{
     
    const allCountries= await Country.findAll()
    return allCountries;
}

module.exports= getCountriesControllers;

