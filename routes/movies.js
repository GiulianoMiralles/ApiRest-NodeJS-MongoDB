const { response } = require('express');
const mongojs = require('mongojs');
const db = mongojs('DatabaseMovies', [
    'movies'
]);

module.exports = app => {


    app.get('/movies', (req, res) => {
        db.movies.find((err, movies) => {
            res.json({
                movies
            });
        });
    });

    app.post('/movies', (req, res) => {

        let newMovie = req.body;
        db.movies.insert(newMovie, (err, movie) => {
            res.json({
                movie  // esto es igual a movie: movie
            });
        })
    });

    app.put('/movies/:id', (req, res) => {
        let updatedMovie = req.body;
        db.movies.update(
            {_id: mongojs.ObjectID(req.params.id)},
            { $set: { updatedMovie} },
            { upsert: true },
            (err,response) => {
                res.json({
                    response
                })
            }
        )
    })

    app.delete('/movies/:id', (req, res) =>{
        db.movies.remove(
            {_id: mongojs.ObjectID(req.params.id)},
            (err,response) => {
                res.json({
                    response
                });
            }
        );
    });

};
