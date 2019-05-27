const express = require('express')
const app = express()
const mc = require("./controllers/messages_controller")

app.use(express.json())
app.use(express.static( "/Users/HS/DevMountain/node-2-afternoon/node-2-afternoon/node_modules/" + '/../public/build'))

const messagesBaseUrl = "/api/messages"
app.post(messagesBaseUrl, mc.create)
app.get(messagesBaseUrl, mc.read)
app.put(`${messagesBaseUrl}/:id`, mc.update)
app.delete(`${messagesBaseUrl}/:id`, mc.delete)



let port = 3001
app.listen(port, () => {
    console.log('Listening to port', port)
} )