const mongoose = require("mongoose");
const fs = require('fs');


function onInsert(err, movies) {
  if (err) {
      console.log(` Oh no, seeding failed: ${err}`);
  } else {
      console.info(`${movies.length} movies were successfully seeded`);
  }
}

module.exports.start = function start() { 

  var Movie = mongoose.model('Movie');
  Movie.collection.countDocuments().then(count => {
    if (count <= 0) {
      const movies = JSON.parse(fs.readFileSync(`${__dirname}/movies.json`, 'utf8'));
      Movie.collection.insertMany(movies, onInsert);    
    }
  });

  var Cinema = mongoose.model('Cinema');
  Cinema.collection.countDocuments().then(count => {
    if(count <= 0) {
      const cinemas = JSON.parse(fs.readFileSync(`${__dirname}/cinemas.json`, 'utf8'));
      Cinema.collection.insertMany(cinemas, onInsert); 
    }
  });
}