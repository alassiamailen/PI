const getCountriesControllers = require('../controllers/getCountriesControllers');
 //const { response } = require('../server');

const getCountriesHandler = async(req,res)=>{        
    try{    
        const response = await getCountriesControllers();
        res.status(200).json(response)     

    }catch(error){
        res.status(400).json({error: error.message})
    }
}
module.exports = getCountriesHandler;