/**                  
 *  _____    _____ ___________ _______  ____  
 *  \__  \  /     \\____ \__  \\_  __ \/  _ \ 
 *   / __ \|  Y Y  \  |_> > __ \|  | \(  <_> )
 *  (____  /__|_|  /   __(____  /__|   \____/ 
 *       \/      \/|__|       \/              
 * 
 * Simple server for demonstration pourposes only, this is not for a production enviroment.
 *
 */
const http = require('http')
const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyparser = require('body-parser')
const Users = require('./controllers/users.controller.js')
const app = express()

const us = new Users()

// -------------------------------------------------------------
// Simple api endpoint for fake login users
// -------------------------------------------------------------
app.use(cors())

app.use(bodyparser.urlencoded({
    extended: true
}))

app.use(bodyparser.json())

app.post('/user', (req, res) => {

    let user = req.body.user

    let user_db = us.getUser(user.name)

    if(typeof user_db !== 'undefined') {

        let user_res = {

            name: user.name,
            avatar: user_db.avatar

        }

        if(user_db.password === user.password) {

            res.json({

                user: user_res
                
            })

        } else {

            res.json({
                data: 'Error'
            })

        }

    }

});

// -------------------------------------------------------------
// Send to the Vue front all GET requests
// -------------------------------------------------------------
app.use(express.static(path.resolve(__dirname, '../vue-chat-front/dist/')))

app.get('*', (req, res) => {

    res.sendFile(path.resolve(__dirname, '../vue-chat-front/dist/', './index.html'))

});

// -------------------------------------------------------------
// Socket.IO
// -------------------------------------------------------------
const server = http.createServer(app)
const io = require('socket.io')(server)

io.on('connection', (socket) => {

    let handshakeData = socket.request;
    let user_name = handshakeData._query['user']
    let socket_id = socket.id

    us.setUserOnline(user_name, socket_id)

    /**
     * Broadcast list of users online
     */
    io.emit('getUsersOnline', {
        users: us.getUsersOnline()
    });

    /**
     * New message from a user
     * @param message Object
     */
    
    socket.on('sendNewMessage', (message) => {

        // Broadcast message to all users
        io.emit('getNewMessage', message)

    })

    /**
     * Client disconnect
     */
    socket.on('disconnect', () => {

        us.setUserOffline(socket_id)

        io.emit('getUserOffline', {
            socket: socket_id
        })

    })
    
})

// -------------------------------------------------------------
// Server Up
// -------------------------------------------------------------
server.listen(process.env.PORT || '3006', function () {

    console.log('Server app listening on port 3006!')

});