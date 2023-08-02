const {Country} = require('../db');
const {Op}= require('sequelize');

const getNameControllers = async(name)=>{

const countryName= await Country.findAll({
    where:{name:{[Op.iLike]:`%${name}`}}  
})
if(!countryName){
    throw new Error(`El pais ${name} no existe`)
}

return countryName;

}
module.exports = getNameControllers;


