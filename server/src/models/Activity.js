const {DataTypes} = require('sequelize')

module.exports =(sequelize)=>{
    sequelize.define('Activity',{
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
        },
        dificultad:{
            type: DataTypes.INTEGER,
            validate:{min:1, max:5},
            allowNull:false
        },
        duracion:{
            type: DataTypes.TIME,
        },
        temporada:{
            type: DataTypes.ENUM('Verano','Otoño','Invierno','Primavera'),
            allowNull:false,
        }
    },{timestamps:false})
}