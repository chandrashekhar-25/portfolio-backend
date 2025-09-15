const mongoose = require("mongoose");

const ProfessionSchema = new mongoose.Schema({
  professionInfo: { type: String, required: true },
  image: { type: String, required: true },
  name: { type: String, required: true },
  profession: { type: String, required: true },
});

module.exports = mongoose.model("Profession", ProfessionSchema);
