const express = require("express");
const route = express.Router();
const { getAllUser, getSingleUser, newUser, updateUser, deleteUser } = require("./../controller/userController")


route.route("/").get(getAllUser).post(newUser);
route.route("/:id").get(getSingleUser).patch(updateUser).delete(deleteUser)


module.exports = route;