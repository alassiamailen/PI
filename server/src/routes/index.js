const { Router } = require("express");
const {Country} = require('../db')

const router = Router();

router.get('/',async (req,res)=>{
   try{
    const paises= await Country.findAll()
    return res.status(200).json(paises)
   } catch(error){
    res.status(400).send(error.message)
   }
})



module.exports = router;