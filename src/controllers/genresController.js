var db=require('../database/models');

module.exports={
    list:(req,res)=>{
        db.genres.findAll()
            .then (generos=>{
                res.render('genresList',{genres:generos});
            })
    },
    detail: (req,res)=>{
        db.genres.findByPk(req.params.id)
            .then(genero=>{
                res.render('genresDetail',{genre:genero});
            });
        }



}