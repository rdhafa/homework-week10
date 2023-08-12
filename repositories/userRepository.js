const { User } = require("../models");

class UserRepository {
  static async findAll() {
    try {
      const user = await User.findAll();
      return user;
    } catch (err) {
      console.log(err);
    }
  }

  static async findById(id) {
    try {
      const user = await User.findByPk(id);
      return user;
    } catch (err) {
      console.log(err);
    }
  }

  static async checkEmail(userEmail) {
    try {
      const check = await User.findOne({ where: { email: userEmail } });
      return check;
    } catch (err) {
      console.log(err);
    }
  }

  static async register(userCredentials) {
    try {
      const register = await User.create(userCredentials);
      return register;
    } catch (err) {
      console.log(err);
    }
  }

  static async checkEmailPassword(userCredentials) {
    try {
      const check = await User.findOne({
        where: {
          email: userCredentials.email,
          password: userCredentials.password,
        },
      });
      return check;
    } catch (err) {
      console.log(err);
    }
  }

  static async updateEmail(id, email) {
    try {
      const update = await User.update({ email: email }, { where: { id: id } });
      return update;
    } catch (err) {
      console.log(err);
    }
  }

  static async updateGender(id, gender) {
    try {
      const update = await User.update({ gender: gender }, { where: { id: id } });
      return update;
    } catch (err) {
      console.log(err);
    }
  }

  static async updatePassword(id, password) {
    try {
      const update = await User.update({ password: password }, { where: { id: id } });
      return update;
    } catch (err) {
      console.log(err);
    }
  }

  static async updateRole(id, role) {
    try {
      const update = await User.update({ role: role }, { where: { id: id } });
      return update;
    } catch (err) {
      console.log(err);
    }
  }

  static async destroy(id) {
    try {
      const destroy = await User.destroy({ where: { id: id } });
      return destroy;
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserRepository;
