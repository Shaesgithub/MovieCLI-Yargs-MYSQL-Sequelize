const Movie = require("./table");


// CREATE
// node src/app.js --create --title "required" --actor ""
exports.createMovie = async (movieObj) => {
  
  try {

    const newMovie = await Movie.create(movieObj);
    console.log(newMovie);
    console.log(`Successfuly added ${newMovie.dataValues.title} and ${newMovie.dataValues.actor} to db`);

  } catch (error) {

      console.log(error);
  }
};

// READ ALL
// node src/app.js --read
exports.readMovies = async ( ) => { 

  try {

    const listMovies = await Movie.findAll();
    console.log(listMovies);

  } catch (error) {

    console.log(error);
  }

};


// UPDATE
// node src/app.js --update --title "find title" --actor "update actor" 
exports.updateMovie = async (yargsObj, findObj) => {

  try {

    const updateMovies = await Movie.update ({ actor: yargsObj.actor}, {where: { title: findObj.title }
      });

        console.log(`Successfuly changed ${findObj.title}'s actor to ${yargsObj.actor}`);

  } catch (error) {
      console.log(error);
  }
}; 




// DELETE
// node src/app.js --delete --title "content"
exports.deleteMovie = async (yargsObj) => {
  
  try {
    
    const delMovie = await Movie.destroy({ where: { title: yargsObj.title }});
    if (delMovie > 0) {

      console.log("Delete Movie Successful");

    } else {
      
      console.log("Delete Movie Unsuccessful");
    }
  } catch (error) {

    console.log(error);
  }
};