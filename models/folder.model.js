const mongoose = require("mongoose");

const folderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    parent_folder: { type: mongoose.Schema.Types.ObjectId, ref: "folder", default: null },
  },
  { timestamps: true }
);

const Folder = mongoose.model("folder", folderSchema);
module.exports = Folder;
