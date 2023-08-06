const postActivitiesControllers = require('../controllers/postActivitiesControllers')


const postActivitiesHandlers= async(req,res)=>{
try {
    const {nombre,dificultad,duracion,temporada,pais}= req.body;
    
    const response= await postActivitiesControllers(nombre,dificultad,temporada,duracion,pais)
    return res.status(200).json(response)
} catch (error) {
  return res.status(400).json({error:error.message})
}


}
module.exports= postActivitiesHandlers;