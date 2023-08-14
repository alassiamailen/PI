const deleteActivitiesControllers= require('../controllers/deleteActivitiesControllers');


const deleteActivitiesHandler= async(req,res)=>{
    try {
        const {id}=req.params;
        const response = await deleteActivitiesControllers(id)
        return res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


module.exports = deleteActivitiesHandler;