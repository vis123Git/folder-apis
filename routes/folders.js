const express = require('express');
const { AuthenticateApi } = require('../middlewares/auth');
const { create_folder, users_folders, delete_folder, get_one_folder } = require('../controllers/folder.controller');
const router = express.Router();

router.use(AuthenticateApi)
router.post("/", create_folder)
router.get("/", users_folders)
router.get("/:id", get_one_folder)
router.delete("/:id", delete_folder)
module.exports = router;
