const express = require('express');
const { AuthenticateApi } = require('../middlewares/auth');
const { add_an_image, users_images, delete_image, get_one_image } = require('../controllers/image.controller');
const { upload } = require('../helpers/multer');
const router = express.Router();

router.use(AuthenticateApi)
router.post("/", upload.single("image"), add_an_image)
router.get("/", users_images)
router.get("/:id", get_one_image)
router.delete("/:id", delete_image)
module.exports = router;
