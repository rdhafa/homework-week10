const UserService = require("../services/userService.js");

class UserController {
  static async findAll(req, res, next) {
    try {
      const result = await UserService.findAll();
      if (!result) throw err;

      res.status(200).send(result);
    } catch (err) {
      next(err);
    }
  }

  static async findById(req, res, next) {
    try {
      const { id } = req.params;
      const result = await UserService.findById(id);
      if (!result) throw { name: "UserNotFound" };

      res.status(200).send(result);
    } catch (err) {
      next(err);
    }
  }

  static async register(req, res, next) {
    try {
      const { id, email, gender, password, role } = req.body;
      if (id || !email || !gender || !password || !role) throw { name: "BadRequest" };

      const userCredentials = { email, gender, password, role };
      const isEmailUsed = await UserService.checkEmail(userCredentials.email);
      if (isEmailUsed) throw { name: "EmailExist" };

      const register = await UserService.register(userCredentials);
      if (!register) throw err;

      res.status(201).send({ message: "Register Successful!" });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) throw { name: "BadRequest" };

      const userCredentials = { email, password };
      const checkEmail = await UserService.checkEmail(userCredentials.email);
      if (!checkEmail) throw { name: "InvalidCreds" };

      const checkEmailPassword = await UserService.checkEmailPassword(userCredentials);
      if (!checkEmailPassword) throw { name: "InvalidCreds" };

      res.status(200).send({ message: "Login Successful!" });
    } catch (err) {
      next(err);
    }
  }

  static async update(req, res, next) {
    try {
      const { id } = req.params;

      const checkUser = await UserService.findById(id);
      if (!checkUser) throw { name: "UserNotFound" };

      const reqBodyId = req.body.id;
      if (reqBodyId) {
        throw { name: "BadRequest" };
      }

      // Sanitize and prepare
      let keyValuePair = [];
      const reqBody = Object.entries(req.body);
      for (const [key, value] of reqBody) {
        if (key === "email" || key === "gender" || key === "password" || key === "role") {
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
        const update = await UserService.update(id, pair.key, pair.value);
        if (!update) throw err;
      });

      res.status(200).send({ message: "User Updated Successfully!" });
    } catch (err) {
      next(err);
    }
  }

  static async destroy(req, res, next) {
    try {
      const { id } = req.params;
      const destroy = await UserService.destroy(id);
      if (!destroy) throw { name: "UserNotFound" };

      res.status(200).send({ message: "User Deleted Successfully!" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
