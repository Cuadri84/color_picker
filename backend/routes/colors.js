const express = require("express");
const {
  getColors,
  getColor,
  createNewColor,
  deleteColor,
  updateColor,
} = require("../controller/colorController");

const router = express.Router();

// GET all colors
router.get("/", getColors);

// GET a single color
router.get("/:id", getColor);

// POST a new color
router.post("/", createNewColor);

// DELETE a color
router.delete("/:id", deleteColor);

// UPDATE a color
router.patch("/:id", updateColor);

module.exports = router;
