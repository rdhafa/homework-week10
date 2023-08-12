const errorHandler = (err, req, res, next) => {
  if (err.name === "BadRequest") {
    res.status(400).send({ message: "Bad Request!" });
  } else if (err.name === "UserNotFound") {
    res.status(404).send({ message: "User Not Found!" });
  } else if (err.name === "MovieNotFound") {
    res.status(404).send({ message: "Movie Not Found!" });
  } else if (err.name === "EmailExist") {
    res.status(400).send({ message: "Email Not Available!" });
  } else if (err.name === "InvalidCreds") {
    res.status(400).send({ message: "Invalid Email or Password!" });
  } else {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = errorHandler;
