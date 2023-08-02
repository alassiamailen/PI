const getIdPaisControllers= require('../controllers/getIdPaisControllers')


const getCountriesHandler = async(req,res)=>{
    try{
        const {id}=req.params;
        const response = await getIdPaisControllers(id)
       return res.status(200).json(response)
    }catch(error){
        res.status(400).json({error:error.message})

    }
}
module.exports=getCountriesHandler;