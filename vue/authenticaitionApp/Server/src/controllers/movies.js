const Movie = require("../models/movies");
const Cinema = require("../models/cinema");
const ReadPreference = require("mongodb").ReadPreference;
const errorHandler = require("../util/error-handler");

require("../mongo").connect();

exports.getMovies = function (req, res) {
  const docquery = Movie.find({"synopsis": {$ne:null}, "graphicUrl": {$ne:null}})
    .read(ReadPreference.NEAREST)
    .limit(20);
  docquery
    .exec()
    .then((movies) => {
      res.status(200).json(movies);
    })
    .catch((error) => {
      res.status(500).send(error);
      return;
    });
};

exports.getMovie = function (req, res) {
  const id = req.params.id;
  Movie.find({movieId: id}).exec(function (err, movie) {
    if (err) {
      return res.status(422).send({
        message: errorHandler.getErrorMessage(err),
      });
    } else {
      res.status(200).json(movie);
    }
  });
};

exports.create = function (req, res) {
  let movie = new Movie(req.body);

  Movie.save(function (err) {
    if (err) {
      return res.status(422).send({
        message: errorHandler.getErrorMessage(err),
      });
    } else {
      res.json(movie);
    }
  });
};

exports.getCinemas = function (req, res) {
  const docquery = Cinema.find()
    .read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then((cinemas) => {
      res.status(200).json(cinemas);
    })
    .catch((error) => {
      res.status(500).send(error);
      return;
    });
};