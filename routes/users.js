const express = require("express");
const userModel = require("./users-model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.status(200).json(await userModel.list());
  } catch (err) {
    next(err);
  }
});

module.exports = router;
