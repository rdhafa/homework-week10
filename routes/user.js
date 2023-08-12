const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController.js");

// Show all users
router.get("/", UserController.findAll);

// Show user by id
router.get("/:id", UserController.findById);

// User Register
router.post("/register", UserController.register);

// User Login
router.post("/login", UserController.login);

// User Update
router.patch("/:id", UserController.update);

// User Delete
router.delete("/:id", UserController.destroy);

module.exports = router;
