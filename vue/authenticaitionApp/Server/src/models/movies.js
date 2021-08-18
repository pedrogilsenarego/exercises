const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {    
    movieId: { type: String, required: true },
    title: String,
    rating: String,
    classification: {
      id: String,
      vistaID: String,
      description: String,
      text: String,
      textColor: String,
      backgroundColor: String
    },
    scheduledFilmId: String,
    synopsis: String,
    runtime: String,
    releaseDate: String,
    graphicUrl: String,
    trailerUrl: String,
    pageUrl: String,
    cinemaId: String,
    cinemaName: String,
    distributor: String,
    allowTicketSales: Boolean,
    shortCode: String,
    ratingDescription: String,
    genres: {
      genreId: String,
      name: String,
      description: String
    },
    isTopMovie: Boolean,
    sortPriority: String
  },
  {
    collection: 'movies',
    read: 'nearest'
  }
);

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;