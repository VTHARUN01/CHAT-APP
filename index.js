let commentsAll = []
const express = require('express')
const app = express()
const path = require('path')
const socket = require('socket.io')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.use(express.static(path.join(__dirname, '/public')))
app.get('/comments/:name', (req, res) => {
    const { name } = req.params
    res.render('chat', { name })
})
const server = app.listen(3000, () => {
    console.log('I AM WATCHING U')
})
const io = socket(server)
io.on("connection", (socket) => {
    socket.on('chat', (data) => {
        io.sockets.emit('chat', data)
    })
})
