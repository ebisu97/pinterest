const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, process.cwd() + "/public/img")
    },
    filename: (req, file, cb) => {
        let fileName = Date.now() + "_" + file.originalname;// => tên file gốc
        cb(null, fileName)
    }
});
const upload = multer({ storage });

module.exports = {
    upload
}