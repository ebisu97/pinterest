const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { successCode, errorCode, failCode } = require('../../config/response');
const getDanhSachAnhDaTaoTheoUser = async (req, res) => {
    try {
        let id = req.params.id;
        let data = await prisma.nguoi_dung.findMany({
            where: {
                nguoi_dung_id: Number(id)
            },
            select: {
                nguoi_dung_id: true,
                hinh_anh: {
                    select: {
                        hinh_id: true,
                        ten_hinh: true,
                        duong_dan: true,
                        mo_ta: true,
                    }
                }
            }
        });
        if (data != "") {
            successCode(res, data, "Lấy danh sách ảnh đã tạo theo người dùng thành công")
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
    getDanhSachAnhDaTaoTheoUser
}