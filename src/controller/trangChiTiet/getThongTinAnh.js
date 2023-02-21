const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { successCode, errorCode, failCode } = require('../../config/response');
const getThongTinAnh = async (req, res) => {
    try {
        let id = req.params.id
        let data = await prisma.hinh_anh.findMany({
            where: {
                hinh_id: Number(id)
            },
            select: {
                hinh_id: true,
                ten_hinh: true,
                mo_ta: true,
                duong_dan: true,
                nguoi_dung: {
                    select: {
                        nguoi_dung_id: true,
                        ho_ten: true
                    }
                }
            }
        })
        if (data != "") {
            successCode(res, data, "Lấy thông tin hình ảnh thành công")
        }
        else {
            failCode(res, "", "Hình không tồn tại !")
        }
    } catch (error) {
        errorCode(res, "Lỗi Backend")
    }
}
module.exports = { getThongTinAnh } 