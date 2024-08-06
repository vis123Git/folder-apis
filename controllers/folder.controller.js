const { isValidObjectId } = require("mongoose");
const { find_one_folder, add_new_folder, find_folders, delete_one_folder } = require("../services/folder.services");

exports.create_folder = async (req, res) => {
  try {
    const { folder_name, parent_folder } = req.body;
    if (!folder_name) return res.status(400).json({ status: false, message: "Please provide folder name!" });
    if (!parent_folder || !isValidObjectId(parent_folder)) return res.status(400).json({ status: false, message: "Please provide parent folder!" });

    const folder_exists = await find_one_folder({ name: folder_name, parent_folder: parent_folder, user_id: req.user_id }, {});
    if (folder_exists) return res.status(400).json({ status: false, message: "Folder already exists!" });

    const add_folder = await add_new_folder({ name: folder_name, parent_folder: parent_folder, user_id: req.user_id });
    if (!add_folder) return res.status(400).json({ status: false, message: "Unable to create folder. Please try again later!" });

    return res.status(201).json({ status: true, message: "Folder created successfully" });
  } catch (error) {
    console.log("error===>",error);
    return res.status(400).json({ status: false, message: "Something went wrong!" });
  }
};

exports.users_folders = async (req, res) => {
  try {
    const user_id = req.user_id;

    const folder_exists = await find_folders({ user_id }, { user_id: 1, name: 1, parent_folder: 1 });
    if (!folder_exists) return res.status(400).json({ status: false, message: "Unable to fetch your folders!" });

    return res.status(201).json({ status: true, data: folder_exists, message: "Folder fetched successfully" });
  } catch (error) {
    console.log("error===>",error);
    return res.status(400).json({ status: false, message: "Something went wrong!" });
  }
};

exports.delete_folder = async (req, res) => {
  try {
    const user_id = req.user_id;
    const { id } = req.params;
    if (!isValidObjectId(id)) return res.status(400).json({ status: false, message: "Please provide folder ID!" });

    const folder_exists = await find_one_folder({ _id: id, user_id });
    if (!folder_exists) return res.status(400).json({ status: false, message: "Folder does not exists!" });

    const del_folder = await delete_one_folder({ _id: id, user_id });
    if (!del_folder) return res.status(400).json({ status: false, message: "Unable to delete folder!" });

    return res.status(201).json({ status: true, message: "Folder deleted successfully" });
  } catch (error) {
    console.log("error===>",error);
    return res.status(400).json({ status: false, message: "Something went wrong!" });
  }
};
