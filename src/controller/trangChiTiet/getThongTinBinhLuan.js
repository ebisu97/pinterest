const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { successCode, errorCode, failCode } = require('../../config/response');
const getThongTinBinhLuan = async (req, res) => {
    try {
        let id = req.params.id;
        let data = await prisma.binh_luan.findMany({
            where: {
                hinh_id: Number(id)
            },
            select: {
                hinh_id: true,
                hinh_anh: { select: { hinh_id: true, ten_hinh: true } },
                nguoi_dung: {
                    select: {
                        nguoi_dung_id: true,
                        ho_ten: true
                    }
                }
            }
        })
        if (data != "") {
            successCode(res, data, "Lấy bình luận thành công")
        }
        else {
            failCode(res, "", "Bình luận không tồn tại !")
        }
    } catch (error) {
        errorCode(res, "Lỗi Backend")
    }
}
module.exports = {
    getThongTinBinhLuan
}