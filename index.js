const express = require('express')
const app = express()
const PORT = 5000

const myGroupRouters = require('./routes/routes.mygroup')
const _19110497Routers = require('./routes/routes.19110497')
const messageRouters = require('./routes/routes.message')

app.use(express.json())

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
})

app.use('/', myGroupRouters)
app.use('/19110497', _19110497Routers)
app.use('/message', messageRouters)

app.listen(PORT)