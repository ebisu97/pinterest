const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { successCode, errorCode, failCode } = require('../../config/response');
const getThongTinUser = async (req, res) => {
    try {
        let data = await prisma.nguoi_dung.findMany({
            select: {
                nguoi_dung_id: true,
                email: true,
                ho_ten: true,
                tuoi: true,
                anh_dai_dien: true,
            }
        });
        if (data != "") {
            successCode(res, data, "Lấy danh sách người dùng thành công")
        }
        else {
            failCode(res, "", "Danh sách người dùng không có !")
        }
    }
    catch (error) {
        errorCode(res, "Lỗi Backend")
    }
}
module.exports = {
    getThongTinUser
}