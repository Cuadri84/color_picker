const Color = require("../models/colorModel");
const mongoose = require("mongoose");

//get all  colors

const getColors = async (req, res) => {
  const colors = await Color.find({}).sort({ createdAt: -1 });

  res.status(200).json(colors);
};

//get a color

const getColor = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such color" });
  }

  const color = await Color.findById(id);

  if (!color) {
    return res.status(404).json({ error: "No such color" });
  }

  res.status(200).json(color);
};
//create new color
const createNewColor = async (req, res) => {
  const { color1, color2, color3, color4, color5 } = req.body;
  //adding to DB
  try {
    const color = await Color.create({
      color1,
      color2,
      color3,
      color4,
      color5,
    });
    res.status(200).json(color);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a color
const deleteColor = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such color" });
  }

  const color = await Color.findOneAndDelete({ _id: id });

  if (!color) {
    return res.status(400).json({ error: "No such color" });
  }

  res.status(200).json(color);
};

//update a color
const updateColor = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such color" });
  }

  const color = await Color.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!color) {
    return res.status(400).json({ error: "No such color" });
  }

  res.status(200).json(color);
};

module.exports = {
  getColors,
  getColor,
  createNewColor,
  deleteColor,
  updateColor,
};
