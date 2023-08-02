const { Country, Activity } = require("../db");

const postActivitiesControllers = async (
  nombre,
  dificultad,
  temporada,
  duracion,  
) => {   
  if (!nombre || !dificultad || !temporada) {
    throw new Error("Complete los campos obligatorios para continuar");
  }
  const nameActivity = await Activity.findOne({
    where: { name: nombre },
  });

  if (nameActivity) {
    throw new Error("La actividad ya existe");
  }

  const activity = await Activity.create({
    name: nombre,
    dificultad,
    duracion:duracion,
    temporada:temporada
  });
//   await activity.setCountry(pais);
  return activity;
};
module.exports = postActivitiesControllers;
