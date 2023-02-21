const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { successCode, errorCode, failCode } = require('../../config/response');
const deleteAnh = async (req, res) => {
    try {
        let id = req.params.id;
        let data = await prisma.hinh_anh.delete({
            where: {
                hinh_id: Number(id)
            }
        });
        if (data != "") {
            successCode(res, data, "Xóa ảnh thành công !")
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
    deleteAnh
}