const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { successCode, errorCode, failCode } = require('../../config/response');
const getDanhSachAnhDaLuuTheoUser = async (req, res) => {
    try {
        let id = req.params.id;
        let data = await prisma.luu_anh.findMany({
            where: {
                nguoi_dung_id: Number(id)
            },
            select: {
                hinh_id: true,
                ngay_luu: true,
            }
        });
        if (data != "") {
            successCode(res, data, "Lấy danh sách ảnh đã lưu theo người dùng thành công")
        }
        else {
            failCode(res, "", "Hình không tồn tại !")
        }
    }
    catch (error) {
        errorCode(res, "Lỗi Backend")
    }
}
module.exports = {
    getDanhSachAnhDaLuuTheoUser
}