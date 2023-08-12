const { Movie } = require("../models");

class MovieRepository {
  static async findAll() {
    try {
      const movie = await Movie.findAll();
      return movie;
    } catch (err) {
      console.log(err);
    }
  }

  static async findById(id) {
    try {
      const movie = await Movie.findByPk(id);
      return movie;
    } catch (err) {
      console.log(err);
    }
  }

  static async create(movie) {
    try {
      const create = await Movie.create(movie);
      return create;
    } catch (err) {
      console.log(err);
    }
  }

  static async updatePhoto(id, photo) {
    try {
      const update = await Movie.update({ photo: photo }, { where: { id: id } });
      return update;
    } catch (err) {
      console.log(err);
    }
  }

  static async updateTitle(id, title) {
    try {
      const update = await Movie.update({ title: title }, { where: { id: id } });
      return update;
    } catch (err) {
      console.log(err);
    }
  }

  static async updateGenres(id, genres) {
    try {
      const update = await Movie.update({ genres: genres }, { where: { id: id } });
      return update;
    } catch (err) {
      console.log(err);
    }
  }

  static async updateYear(id, year) {
    try {
      const update = await Movie.update({ year: year }, { where: { id: id } });
      return update;
    } catch (err) {
      console.log(err);
    }
  }

  static async destroy(id) {
    try {
      const destroy = await Movie.destroy({ where: { id: id } });
      return destroy;
    } catch (err) {
      next(err);
    }
  }
}

module.exports = MovieRepository;
