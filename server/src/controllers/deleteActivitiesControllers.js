const {Activity} = require('../db')


const deleteActivities = async (id)=>{
console.log(id)
const deleteActivity = await Activity.destroy({

    where:{id:id}
    

})
return deleteActivity;
}

module.exports= deleteActivities;