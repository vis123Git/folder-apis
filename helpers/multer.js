const path = require("path");
const multer = require("multer");

////////////////////multer-start///////////////////////////
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname === "image") {
      cb(null, path.join(__dirname, "../public/images"), function (err, success) {
        if (err) throw err;
      });
    }
  },
  filename: function (req, file, cb) {
    console.log("file:", file);
    const name = Date.now() + "-" + file.originalname;
    cb(null, name, function (error1, success1) {
      if (error1) throw error1;
    });
  },
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter,
});

const fileFilter = function (req, file, cb) {
  // Check the mimetype of the file against the valid mimetypes
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/jpg" || file.mimetype === "image/png" || file.mimetype === "image/gif") {
    cb(null, true); // Accept the file
  } else {
    cb(new Error("Invalid file type")); // Reject the file
  }
};

//********************************************************************************************************************************************************************* */

module.exports = {
  upload,
};
