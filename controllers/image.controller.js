const { isValidObjectId } = require("mongoose");
const { find_one_folder, add_new_folder, find_folders, delete_one_folder } = require("../services/folder.services");
const { add_new_image, find_images, find_one_image, delete_one_image } = require("../services/image.services");

exports.add_an_image = async (req, res) => {
  try {
    const { folder_id } = req.body;
    if (!folder_id || !isValidObjectId(folder_id)) return res.status(400).json({ status: false, message: "Please provide valid folder ID!" });

    const folder_exists = await find_one_folder({ _id: folder_id, user_id: req.user_id }, {});
    if (!folder_exists) return res.status(400).json({ status: false, message: "Folder does not exists!" });

    if (!req.file) return res.status(400).json({ status: false, message: "Please upload an image!" });


    const add_file = await add_new_image({ name: req.file.filename, original_name :  req.file.originalname, path: req.file.path, folder_id, user_id: req.user_id });
    if (!add_file) return res.status(400).json({ status: false, message: "Unable to upload image. Please try again later!" });

    return res.status(201).json({ status: true, message: "Image uploaded successfully" });
  } catch (error) {
    console.log("error===>", error);
    return res.status(400).json({ status: false, message: "Something went wrong!" });
  }
};

exports.users_images = async (req, res) => {
  try {
    const user_id = req.user_id;
    const { name } = req.query;

    const filter = { user_id}
    if(name){
      filter.original_name =  { $regex: name, $options: "i" }
    }
    const images_exists = await find_images(filter, { user_id: 1, name: 1, folder_id: 1, path: 1 ,original_name:1});
    if (!images_exists) return res.status(400).json({ status: false, message: "Unable to fetch your images!" });

    images_exists.forEach(img => {
      img.name = `${process.env.BASE_URL}images/${img.name}`
    });
    return res.status(200).json({ status: true, data: images_exists, message: "Images fetched successfully" });
  } catch (error) {
    console.log("error===>", error);
    return res.status(400).json({ status: false, message: "Something went wrong!" });
  }
};

exports.get_one_image = async (req, res) => {
  try {
    const user_id = req.user_id;
    const { id } = req.params;
    if (!isValidObjectId(id)) return res.status(400).json({ status: false, message: "Please provide image ID!" });

    const image_exists = await find_one_image({ _id: id, user_id });
    if (!image_exists) return res.status(400).json({ status: false, message: "Image does not exists!" });

    return res.status(200).json({ status: true, data: image_exists, message: "Image found successfully" });
  } catch (error) {
    console.log("error===>", error);
    return res.status(400).json({ status: false, message: "Something went wrong!" });
  }
};

exports.delete_image = async (req, res) => {
  try {
    const user_id = req.user_id;
    const { id } = req.params;
    if (!isValidObjectId(id)) return res.status(400).json({ status: false, message: "Please provide image ID!" });

    const image_exists = await find_one_image({ _id: id, user_id });
    if (!image_exists) return res.status(400).json({ status: false, message: "Image does not exists!" });

    const del_folder = await delete_one_image({ _id: id, user_id });
    if (!del_folder) return res.status(400).json({ status: false, message: "Unable to delete image!" });

    return res.status(200).json({ status: true, message: "Image deleted successfully" });
  } catch (error) {
    console.log("error===>", error);
    return res.status(400).json({ status: false, message: "Something went wrong!" });
  }
};
