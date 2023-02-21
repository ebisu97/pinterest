const express = require('express');
const { trangThemAnh } = require('../controller/trangThemAnh/trangThemAnh');
const { verifyToken } = require('../middleware/baseToken');
const { upload } = require('../middleware/upload');

const trangThemAnhRoutes = express.Router();
trangThemAnhRoutes.post("/themAnh", upload.single("dataUpload"), verifyToken, trangThemAnh)

module.exports = trangThemAnhRoutes;
