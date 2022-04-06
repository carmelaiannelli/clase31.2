module.exports=function(sequelize, dataTypes){
    const Actor=sequelize.define("actors", {
        id:{ 
            autoincrement:true,
            primaryKey:true,
            type: dataTypes.INTEGER
        },
        first_name: {
            type: dataTypes.STRING,
            allowNull:false
        },
        last_name: {
            type: dataTypes.STRING,
            allowNull:false
        },
        rating:{
            allowNull:false,
            type:dataTypes.INTEGER
        },
        favorite_movie_id:dataTypes.INTEGER
    },
    {timestamps:false});
    
    return Actor;
};