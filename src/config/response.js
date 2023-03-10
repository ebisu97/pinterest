//200,400,500
const successCode = (res, data, message) => {
    res.status(200).json({
        message,
        content: data
    })
}

//400
const failCode = (res, data, message) => {
    res.status(400).json({
        message,
        content:data
    });
}

const wrongConditionCode = (res,message) => {
    res.status(401).send(message)
}

//500
const errorCode = (res,message) => {
    res.status(500).send(message)
}

module.exports = {
    successCode,
    failCode,
    errorCode,
    wrongConditionCode
}