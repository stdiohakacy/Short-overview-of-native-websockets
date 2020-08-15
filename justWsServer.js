const http = require('http')
const websocket = require('ws')

const server = http.createServer((req, res) => {
    res.end('Connected!')
})

const wss = new websocket.Server({server})
wss.on('headers', msg => {
    console.log(msg)
})

wss.on('connection', (ws, req) => {
    ws.send('Welcome to the websocket server!!!')
    ws.on('message', msg => {
        console.log(msg)
    })
})

server.listen(8000, () => {
    console.log('OK')
})
