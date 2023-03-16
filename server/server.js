require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const formData = require('express-form-data')

const profilesRouter = require('./routes/profiles.js')
const authRouter = require('./routes/auth.js')
const levelRouter = require('./routes/level.js')
const worldRouter = require('./routes/world.js')
const progressRouter = require('./routes/progress.js')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(formData.parse())

app.use('/api/profiles', profilesRouter)
app.use('/api/auth', authRouter)
app.use('/api/level', levelRouter)
app.use('/api/world', worldRouter)
app.use('/api/progress', progressRouter)

app.use(function (req, res, next) {
  res.status(404).json({ err: 'Not found' })
})

app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({ err: err.message })
})

module.exports = app
