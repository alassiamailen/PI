const getNameControllers= require('../controllers/getNameControllers')

const getNameHandler= async(req,res)=>{
try {
    const {name}=req.query;
    const response = await getNameControllers(name)
    return res.status(200).json(response)
} catch (error) {
    res.status(400).json({error: error.message})
}

}
module.exports= getNameHandler;