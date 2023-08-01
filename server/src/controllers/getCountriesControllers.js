const {Country} = require('../db');

const getCountriesControllers =async()=>{
     
    const allCountries= await Country.FindAll()
    return allCountries;
}

module.exports= getCountriesControllers;

