var db=require('../database/models');

module.exports={
    list:(req,res)=>{
        db.actors.findAll()
            .then (actores=>{
                res.render('actorsList',{actors:actores});
            })
    },
    detail: (req,res)=>{
        db.actors.findByPk(req.params.id)
            .then(actor=>{
                res.render('actorsDetail',{actor:actor});
            });
        }
}