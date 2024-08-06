const Image = require("../models/image.model");

module.exports.add_new_image = async (data) => {
  try {
    return await Image.create(data);
  } catch (error) {
    console.log("error--->", error);
    throw error;
  }
};

module.exports.find_one_image = async (condition, fields) => {
  try {
    return await Image.findOne(condition, fields);
  } catch (error) {
    console.log("error--->", error);
    throw error;
  }
};

module.exports.find_image_by_id = async (id) => {
  try {
    return await Image.findById(id);
  } catch (error) {
    console.log("error--->", error);
    throw error;
  }
};

module.exports.find_images = async (condition, fields) => {
  try {
    return await Image.find(condition, fields);
  } catch (error) {
    console.log("error--->", error);
    throw error;
  }
};

module.exports.delete_one_image = async (condition) => {
  try {
    return await Image.findOneAndDelete(condition);
  } catch (error) {
    console.log("error--->", error);
    throw error;
  }
};
