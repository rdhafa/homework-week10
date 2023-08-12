const MovieRepository = require("../repositories/movieRepository.js");
const fs = require("fs");
const path = require("path");

class MovieService {
  static async findAll() {
    try {
      const movie = await MovieRepository.findAll();
      return movie;
    } catch (err) {
      console.log(err);
    }
  }

  static async findById(id) {
    try {
      const movie = await MovieRepository.findById(id);
      return movie;
    } catch (err) {
      console.log(err);
    }
  }

  static async create(movie) {
    try {
      const create = await MovieRepository.create(movie);
      return create;
    } catch (err) {
      console.log(err);
    }
  }

  static async update(id, key, value) {
    try {
      if (key === "photo") {
        const photo = value;
        const update = await MovieRepository.updatePhoto(id, photo);
        return update;
      } else if (key === "title") {
        const title = value;
        const update = await MovieRepository.updateTitle(id, title);
        return update;
      } else if (key === "genres") {
        const genres = value;
        const update = await MovieRepository.updateGenres(id, genres);
        return update;
      } else if (key === "year") {
        const year = value;
        const update = await MovieRepository.updateYear(id, year);
        return update;
      }
    } catch (err) {
      console.log(err);
    }
  }

  static async deleteOldPhoto(photoName) {
    try {
      const photoPath = path.normalize(__dirname + `\\..` + `/uploads/` + photoName);
      fs.unlink(photoPath, (err) => {
        if (err) {
          throw err;
        }
        return;
      });
    } catch (err) {
      console.log(err);
    }
  }

  static async destroy(id) {
    try {
      const destroy = await MovieRepository.destroy(id);
      return destroy;
    } catch (err) {
      next(err);
    }
  }
}

module.exports = MovieService;
