const UserRepository = require("../repositories/userRepository.js");

class UserService {
  static async findAll() {
    try {
      const user = await UserRepository.findAll();
      return user;
    } catch (err) {
      console.log(err);
    }
  }

  static async findById(id) {
    try {
      const user = await UserRepository.findById(id);
      return user;
    } catch (err) {
      console.log(err);
    }
  }

  static async checkEmail(userEmail) {
    try {
      const check = await UserRepository.checkEmail(userEmail);
      return check;
    } catch (err) {
      console.log(err);
    }
  }

  static async register(userCredentials) {
    try {
      const register = await UserRepository.register(userCredentials);
      return register;
    } catch (err) {
      console.log(err);
    }
  }

  static async checkEmailPassword(userCredentials) {
    try {
      const check = await UserRepository.checkEmailPassword(userCredentials);
      return check;
    } catch (err) {
      console.log(err);
    }
  }

  static async update(id, key, value) {
    try {
      if (key === "email") {
        const email = value;
        const update = await UserRepository.updateEmail(id, email);
        return update;
      } else if (key === "gender") {
        const gender = value;
        const update = await UserRepository.updateGender(id, gender);
        return update;
      } else if (key === "password") {
        const password = value;
        const update = await UserRepository.updatePassword(id, password);
        return update;
      } else if (key === "role") {
        const role = value;
        const update = await UserRepository.updateRole(id, role);
        return update;
      }
    } catch (err) {
      console.log(err);
    }
  }

  static async destroy(id) {
    try {
      const destroy = await UserRepository.destroy(id);
      return destroy;
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserService;
