const {Activity,Country} = require('../db') 


const getActivitiesControllers = async()=>{

const allActivities = await Activity.findAll({
    include:[
        {
          model: Country,
          attributes:["name","img"],
          through:{attributes:[]}
        }
      ]
})

return allActivities;

}
module.exports= getActivitiesControllers;