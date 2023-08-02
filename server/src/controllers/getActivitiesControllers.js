const {Activity} = require('../db') 


const getActivitiesControllers = async()=>{

const allActivities = await Activity.findAll()
console.log(allActivities)
return allActivities;

}
module.exports= getActivitiesControllers;