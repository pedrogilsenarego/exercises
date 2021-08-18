const movies = require("../controllers/movies");

module.exports = function (app) {
  // Articles collection routes
  app.route('/api/movies')
    .get(movies.getMovies)
    .post(movies.create);

  // Single article routes
  app.route('/api/movies/:id')
    .get(movies.getMovie);

  app.route('/api/cinemas')
    .get(movies.getCinemas);

  // Finish by binding the article middleware
  app.param('id', movies.getMovie);
};