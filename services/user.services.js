const User = require("../models/user.model");

module.exports.add_new_user = async (data) => {
  try {
    return await User.create(data);
  } catch (error) {
    console.log("error--->", error);
    throw error;
  }
};

module.exports.find_one_user = async (condition, fields) => {
  try {
    return await User.findOne(condition, fields);
  } catch (error) {
    console.log("error--->", error);
    throw error;
  }
};

module.exports.find_user_by_id = async (id) => {
  try {
    return await User.findById(id);
  } catch (error) {
    console.log("error--->", error);
    throw error;
  }
};

module.exports.update_user = async (id, data) => {
  try {
    return await User.findByIdAndUpdate(id, { $set: data }, { new: true });
  } catch (error) {
    console.log("error--->", error);
    throw error;
  }
};
