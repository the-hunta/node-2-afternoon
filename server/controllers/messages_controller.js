let messages = {};
let id = 0

module.exports = {

    create: (req, res) =>{
        const {time, text} = req.body
        messages.push({id, text, time});
        id++
        res.status(200).send(message)
    },

    read: (req, res) => {
        res.status(200).send(message)
    },

    update: (req, res) => {
        const{text} = req.body
        const updateID = req.params.id
        const messageIndex = message.findIndex(message => message.id == updateID)
        let message = messages[messageIndex]
        
        message[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        }

        res.status(200).send(messages)
    },

    delete: (req, res) => {
        const deleteID = req.params.id
        messageIndex = messages.findIndex(message => message.id == deleteID)
        messgae.splice(messgaeIndex, 1)
        res.status(200).send(messages)
    }
}