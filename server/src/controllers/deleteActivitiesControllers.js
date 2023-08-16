const {Activity} = require('../db')


const deleteActivities = async (id)=>{

const deleteActivity = await Activity.destroy({

    where:{id:id}
    

})
return deleteActivity;
}

module.exports= deleteActivities;