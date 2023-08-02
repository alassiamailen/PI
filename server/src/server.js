const express = require("express");
 const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const getCountries = require('./routes/getCountries');
const getIdPais = require('./routes/getIdPais');
const getName = require('./routes/getName');
const postActivities= require('./routes/postActivities');
const getActivities=require('./routes/getActivities');
const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
//cada ruta su propia funcion. La 
server.use('/', getCountries);
server.use('/', getName);
server.use('/', getIdPais);
server.use('/',postActivities);
server.use('/', getActivities);


module.exports = server;
