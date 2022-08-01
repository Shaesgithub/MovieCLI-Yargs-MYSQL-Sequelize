const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const { createMovie,listMovies, updateMovie, deleteMovie } = require("./movie/functions");

const app = async (yargsObj) => {

    await sequelize.sync({ alter: true });

    if (yargsObj.create) {

        //Add movie to db
        await createMovie({ title: yargsObj.title, actor: yargsObj.actor });

    } else if (yargsObj.read) {

        //List movies from db
        await listMovies();

    } else if (yargsObj.update) {

        //Update a movie from db
        await updateMovie({ actor: yargsObj.actor }, { title: yargsObj.title });

    } else if (yargsObj.delete) {

        //Delete a movie from db
        await deleteMovie({ title: yargsObj.title });

    } else {

      console.log("Incorrect command");
    }
};
  
app(yargs.argv);