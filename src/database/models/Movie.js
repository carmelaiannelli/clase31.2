module.exports=function(sequelize, dataTypes){
    const Movie=sequelize.define("movies", {
        id:{ 
            autoincrement:true,
            primaryKey:true,
            type: dataTypes.INTEGER
        },
        title: {
            type: dataTypes.STRING,
            allowNull:false
        },
        genre_id:{
            allowNull:true,
            //allowed para poder completar envio de formulario add movies
            type:dataTypes.INTEGER
        },
        rating:{
            allowNull:false,
            type:dataTypes.INTEGER
        },
        awards:{ 
            allowNull:false,
            type:dataTypes.INTEGER
        },
        release_date:dataTypes.DATE,
        length:{
            allowNull:true,
            type:dataTypes.INTEGER
        }
    },
    {timestamps:false});
    
    return Movie;
};