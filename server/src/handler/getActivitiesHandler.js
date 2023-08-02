const getActivitiesControllers = require('../controllers/getActivitiesControllers')


const getActivitiesHandler = async(req,res)=>{
try {
    const response= await getActivitiesControllers()
    res.status(200).json(response)

} catch (error) {
    res.status(400).json({error: error.message})
    
}

}

module.exports= getActivitiesHandler;