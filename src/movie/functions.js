const Movie = require("./table");

exports.createMovie = async (movieObj) => { // node src/app.js --create --title "" --actor ""
    try {

        // Create movie
        const newMovie = await Movie.create(movieObj);
        console.log(
            `Successfuly added ${newMovie.dataValues.title} and ${newMovie.dataValues.actor} to db`
          );

    } catch (error) {

        console.log(error);
    }
};

exports.listMovies = async ( ) => { // node src/app.js --read
    try {

      // Find all movies
      const movies = await Movie.findAll();

      for (let x = 0; x < movies.length; x++) {

        console.log(movies[x].dataValues.title, movies[x].dataValues.actor);
        
      }

    } catch (error) {

      console.log(error);
    }
  };

  exports.updateMovie = async (yargsObj, movieObj) => { 
    try {
        const updateMovie = await Movie.update ({ movieObj }, {
            where: { title: yargsObj.title, actor: yargsObj.actor }
        });
        console.log(movieObj);
    } catch (error) {
        console.log(error);
    }
}; 

  exports.deleteMovie = async (searchObj) => { // node src/app.js --delete --title "old title"
    try {
      //delete movie
      const deleteOne = await Movie.destroy({ where: searchObj });
      if (deleteOne > 0) {

        console.log("Delete Movie Successful");

      } else {
        
        console.log("Delete Movie Unsuccessful");
      }
    } catch (error) {

      console.log(error);
    }
  };