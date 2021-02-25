const mongojs = require('mongojs');
const db = mongojs('DatabaseMovies', [
    'movies'
]);

module.exports = app => {
    app.get('/movies', (req, res) => {
        db.movies.find((err, movies) => {
            res.json({
                response: movies
            });
        });
    });
};