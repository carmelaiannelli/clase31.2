module.exports=function(sequelize, dataTypes){
    const Genre=sequelize.define("genres", {
        id:{ 
            autoincrement:true,
            primaryKey:true,
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING,
            allowNull:false
        },
        ranking:{
            allowNull:false,
            type:dataTypes.INTEGER
        },
        active: {
            allowNull:false,
            type:dataTypes.INTEGER
        }

    },
    {timestamps:false});
    
    return Genre;
};