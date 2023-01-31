/** @format */

const express = require("express");

const { getUser, createUser, logoutUser, getAuth } = require("../controllers/users");
const { auth } = require("../middleware/auth");

const router = express.Router();

router.post("/register", createUser);
router.get("/auth", auth, getAuth);
router.post("/login", getUser);
//logout api will be called on loglout button click like this
//  http://localhost:5000/api/users/logout
router.get("/logout", auth, logoutUser);

module.exports = router;
