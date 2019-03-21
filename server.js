const express = require('express')
const app = express()
const logger = require('morgan')
const router = require('./routes/index')
const villagerController = require('./controllers/villagerController')

app.use(logger('dev'))
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(`${__dirname}/client/build`))

app.use('/', router)
app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
  })

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT + ", hello Neku")
})