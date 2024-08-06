const Folder = require("../models/folder.model");

module.exports.add_new_folder = async (data) => {
  try {
    return await Folder.create(data);
  } catch (error) {
    console.log("error--->", error);
    throw error;
  }
};

module.exports.find_one_folder = async (condition, fields) => {
  try {
    return await Folder.findOne(condition, fields);
  } catch (error) {
    console.log("error--->", error);
    throw error;
  }
};


module.exports.find_folder_by_id = async (id) => {
  try {
    return await Folder.findById(id);
  } catch (error) {
    console.log("error--->", error);
    throw error;
  }
};

module.exports.find_folders = async (condition, fields) => {
  try {
    return await Folder.find(condition, fields);
  } catch (error) {
    console.log("error--->", error);
    throw error;
  }
};

module.exports.delete_one_folder = async (condition) => {
  try {
    return await Folder.findOneAndDelete(condition);
  } catch (error) {
    console.log("error--->", error);
    throw error;
  }
};
