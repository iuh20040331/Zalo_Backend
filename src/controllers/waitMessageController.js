let {
    updateById,
    updateBySenderAndReceiver,
    updateBySenderAndGroupChat
} = require('../repositories/waitMessageRepository')

let updateByIdMethod = async(req, res) => {
    let data = await updateById(req.params.id, req.params.dateTimeSend)
    return res.status(200).json(data)
}

let updateBySenderAndReceiverMethod = async(req, res) => {
    let data = await updateBySenderAndReceiver(req.params.sender, req.params.receiver, req.params.dateTimeSend)
    return res.status(200).json(data)
}

let updateBySenderAndGroupChatMethod = async(req, res) => {
    let data = await updateBySenderAndGroupChat(req.params.sender, req.params.groupChat, req.params.dateTimeSend)
    return res.status(200).json(data)
}


module.exports = {
    updateByIdMethod,
    updateBySenderAndReceiverMethod,
    updateBySenderAndGroupChatMethod
}