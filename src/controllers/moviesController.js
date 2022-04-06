var db=require('../database/models');

module.exports={
    list:(req,res)=>{
        db.movies.findAll()
            .then (peliculas=>{
                res.render('moviesList',{movies:peliculas});
            });
    },
    new: (req,res)=>{
        db.movies.findAll({order:[['release_date','DESC']]})
            .then (peliculas=>{
                res.render('newestMovies',{movies:peliculas});
            });
    },
    detail: (req,res)=>{
        db.movies.findByPk(req.params.id)
            .then(pelicula=>{
                res.render('moviesDetail',{movie:pelicula});
            });
    },
    recommended:(req,res)=>{
        db.movies.findAll({order:[['rating','DESC']],limit:5})
            .then (peliculas=>{
                res.render('recommendedMovies',{movies:peliculas});
            })
    //aca no se entiende muy bien la consigna, asi que las ordene por rating.
    },
    add:(req,res)=>{
        res.render('moviesAdd');
    },
    create:(req,res)=>{
        db.movies.create({
            title:req.body.title,
            rating:req.body.rating,
            awards:req.body.awards,
            release_date:req.body.release_date,
            length:req.body.length
        });
        res.redirect('/movies')
          
    },
    edit:(req,res)=>{
        db.movies.findByPk(req.params.id)
        .then(pelicula=>{
            res.render('moviesEdit',{Movie:pelicula})
        });
    },
    update:(req,res)=>{
        db.movies.update(
            {title:req.body.title,
            rating:req.body.rating,
            awards:req.body.awards,
            release_date:req.body.release_date,
            length:req.body.length},
            {where: {id:req.params.id}});
        res.redirect('/movies')
    },
    delete:(req,res)=>{
        db.movies.findByPk(req.params.id)
            .then(pelicula=>{
                res.render('moviesDelete',{Movie:pelicula})
            });
    },
    destroy:(req,res)=>{
        db.movies.destroy(
            {where: {id:req.params.id}});
        res.redirect('/movies')
    }
}