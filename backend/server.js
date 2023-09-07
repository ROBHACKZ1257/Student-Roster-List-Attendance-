require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8080 
const connectDB = require('./config')
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
const studentRoutes = require('./routes/studentRoutes')

const { authorize } = require('./middleware/Middleware')

connectDB()

app.use(express.json())
app.use('/auth', authRoutes)
app.use('api/users', authorize, userRoutes)
app.use('/api/student', studentRoutes)


app.get('/', (req, res) => {res.send('Hello Server')})
app.listen(PORT, () => {
    console.log('listening on PORT:', PORT)
})
// I have to connect to the routes first
// and other files that I added please refer to
// Example-code MOD3/Day-4-Fri/fullstack-blog-final/backend/server.js