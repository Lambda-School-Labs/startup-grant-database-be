const router = require("express").Router();
const bcrypt = require("bcryptjs");

const users = require("../models/userModel.js");

router.post("/user", (req, res) => {
  let user = req.body;

  users
    .addUser(user)
    .then(passHash => {
      res.status(201).json(passHash);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "Oh no, something went wrong", error });
    });
});

// ==========GET: get specific user by auth ID==========
router.get("/user/:id", (req, res) => {
  const { id } = req.params;

  users
    .getGrantByAuthId(id)
    .then(grants => {
      if (grants) {
        res.status(200).json(grants);
      } else {
        res
          .status(404)
          .json({ message: "The grant with the specified ID does not exist." });
      }
    })
    .catch(error => {
      res.status(500).json({ message: "failed to load grant by id" });
    });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  users
    .findUserBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({ message: "Welcome" });
      } else {
        res.status(401).json({ message: "Incorrect login info" });
      }
    })
    .catch(error => {
      res.status(500).json({ message: "Error logging in." });
    });
});

module.exports = router;
