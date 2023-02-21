const express = require('express');
const { dangKy, dangNhap, capNhatNguoiDung } = require('../controller/users/userController');
const { verifyToken } = require('../middleware/baseToken');
const userRoute = express.Router();
//trang đăng ký, đăng nhập
userRoute.post("/dangKy", dangKy)
userRoute.post("/dangNhap", dangNhap)
//trang cập nhật
userRoute.put("/capNhat/:id", verifyToken, capNhatNguoiDung)
module.exports = userRoute;