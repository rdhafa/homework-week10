const express = require("express");
const router = express.Router();
const MovieController = require("../controllers/movieController.js");
const upload = require("../middlewares/multer.js");

// Show all movies
router.get("/", MovieController.findAll);

// Show movie by id
router.get("/:id", MovieController.findById);

// Create Movie
router.post("/", upload.single("photo"), MovieController.create);

// Movie Update
router.patch("/:id", upload.single("photo"), MovieController.update);

// Movie Delete
router.delete("/:id", MovieController.destroy);

module.exports = router;
