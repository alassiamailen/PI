const { Country, Activity } = require("../db");

const postActivitiesControllers = async (
  nombre,
  dificultad,
  temporada,
  duracion,  
  pais
) => {   
  if (!nombre || !dificultad || !temporada|| !pais) {
    throw new Error("Complete los campos obligatorios para continuar");
  }
  const nameActivity = await Activity.findOne({
    where: { name: nombre },
  });

  
  const activity = await Activity.create({
    name: nombre,
    dificultad,
    duracion:duracion,
    temporada:temporada,
    pais:pais
  });
  await activity.addCountry(pais);
  const findPais= await Activity.findOne({
    where:{id: activity.id},
    include:[
      {
        model: Country,
        attributes:["name"],
        through:{attributes:[]}
      }
    ]
  });
  return findPais;
};
module.exports = postActivitiesControllers;
