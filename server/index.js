const axios = require("axios");
const server = require("./src/server");
const { conn ,Country} = require('./src/db.js');

const PORT = 3001;
// si esta en false no se borra la bd, para hacer el post pasar a true
conn.sync({ force: true }).then(() => {
server.listen(PORT, async () => {
  const db = Country.findAll()
  if(!db.length){
    const {data}= await axios('http://localhost:5000/countries')    
    const countries = data.map((pais)=>{
      return {
        name: pais.name.common,
        id: pais.cca3,
        img: pais.flags.png,
        continente: pais.continents[0],
        capital: pais.capital?pais.capital[0] : 'la capital no existe',
        subregion: pais.subregion?pais.subregion : 'la subregion no existe',
        area: pais.area?pais.area : 'el area no existe',
        poblacion: pais.population        
      }
    })
    
    await Country.bulkCreate(countries)
  }

  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))


