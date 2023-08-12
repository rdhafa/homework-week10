const MovieService = require("../services/movieService.js");

class MovieController {
  static async findAll(req, res, next) {
    try {
      const result = await MovieService.findAll();
      if (!result) throw err;

      res.status(200).send(result);
    } catch (err) {
      next(err);
    }
  }

  static async findById(req, res, next) {
    try {
      const { id } = req.params;
      const result = await MovieService.findById(id);
      if (!result) throw { name: "MovieNotFound" };

      res.status(200).send(result);
    } catch (err) {
      next(err);
    }
  }

  static async create(req, res, next) {
    try {
      const { id, title, genres, year } = req.body;
      const photo = req.file.filename;
      if (id || !title || !genres || !year || !photo) throw { name: "BadRequest" };

      const movie = { title, genres, year, photo };
      const create = await MovieService.create(movie);
      if (!create) throw err;

      res.status(201).send({ message: "Create Movie Successful!" });
    } catch (err) {
      next(err);
    }
  }

  static async update(req, res, next) {
    try {
      const { id } = req.params;

      const checkMovie = await MovieService.findById(id);
      if (!checkMovie) throw { name: "MovieNotFound" };

      const reqBodyId = req.body.id;
      if (reqBodyId) {
        throw { name: "BadRequest" };
      }

      // Sanitize and prepare
      let keyValuePair = [];
      const reqBody = Object.entries(req.body);
      for (const [key, value] of reqBody) {
        if (key === "title" || key === "genres" || key === "year") {
          let keyValuePairObj = {
            key: key,
            value: value,
          };
          keyValuePair.push(keyValuePairObj);
        } else {
          throw { name: "BadRequest" };
        }
      }

      // Start updating
      keyValuePair.forEach(async (pair, index) => {
        const update = await MovieService.update(id, pair.key, pair.value);
        if (!update) throw err;
      });

      // Check is new photo uploaded
      const newPhoto = req.file;
      if (newPhoto) {
        // Delete old photo from directory
        const deleteOldPhoto = await MovieService.deleteOldPhoto(checkMovie.photo);

        const update = await MovieService.update(id, "photo", newPhoto.filename);
        if (!update) throw err;
      }

      res.status(200).send({ message: "Movie Updated Successfully!" });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async destroy(req, res, next) {
    try {
      const { id } = req.params;

      // Delete photo from directory
      const getPhoto = await MovieService.findById(id);
      if (!getPhoto) throw { name: "MovieNotFound" };
      const deleteOldPhoto = await MovieService.deleteOldPhoto(getPhoto.photo);

      // Delete database record
      const destroy = await MovieService.destroy(id);
      if (!destroy) throw { name: "MovieNotFound" };

      res.status(200).send({ message: "Movie Deleted Successfully!" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = MovieController;
