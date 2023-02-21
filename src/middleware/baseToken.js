const jwt = require("jsonwebtoken");
const parseToken = (data) =>{
    let token = jwt.sign({data},"anhtuan",{algorithm:"HS256",expiresIn:"9y"});
    return token;
}

const checkToken = (token) =>{
    try{
      
        let checkT = jwt.verify(token,"anhtuan");
        if (checkT){
            return {checkData: true, message:""}
        } 
    } catch(err){
        return {checkData: false, message: err.message}
    }

}

const verifyToken = (req,res,next) => {
    const {token} = req.headers;
    const verifyToken = checkToken(token)
    if (verifyToken.checkData){
        next();
    }else{
        res.status(401).send(verifyToken.message)
    }
}

module.exports = {
    parseToken,
    checkToken,
    verifyToken
}