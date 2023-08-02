const {Country,Activity} = require('../db');


const getIdPaisControllers = async(id)=>{
    
    const countryId= await Country.findOne({
        where: {id:id},
        include:[Activity]
    })
       
    return countryId;   
    
}
module.exports= getIdPaisControllers;