const {Activity,Country} = require('../db') 


const getActivitiesControllers = async()=>{

const allActivities = await Activity.findAll({
    include:[
        {
          model: Country,
          attributes:["name"],
          through:{attributes:[]}
        }
      ]
})
console.log(allActivities)
return allActivities;

}
module.exports= getActivitiesControllers;