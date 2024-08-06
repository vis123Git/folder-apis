const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  original_name: { type: String, required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  folder_id: { type: mongoose.Schema.Types.ObjectId, ref: "folder", required: true },
  path: { type: String, required: true },
});

const Image = mongoose.model("image", imageSchema);
module.exports = Image;
