const {getCountries,} = require('../controllers/getCountriesControllers');
// const { response } = require('../server');

const countriesHandler = async(req,res)=>{
        
    try{    
        const response = await getCountries();
        res.status(200).json(response)     

    }catch(error){
        res.status(400).json({error: error.message})
    }
}