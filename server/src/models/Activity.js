const {DataTypes} = require('sequelize')

module.exports =(sequelize)=>{
    sequelize.define('Activity',{
        id:{
            type: DataTypes.UUID, 
            defaultValue: DataTypes.UUIDV4,            
            primaryKey:true,
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },        
        dificultad:{
            type: DataTypes.INTEGER,
            validate:{min:1, max:5},
            allowNull:false
        },
        duracion:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        temporada:{
            type: DataTypes.ENUM('Verano','Otoño','Invierno','Primavera'),
            allowNull:false,
        }
    },{timestamps:false})
}