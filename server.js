const express = require('express')
const app = express()
const logger = require('morgan')
const router = require('./routes/index')
const villagerController = require('./controllers/villagerController')

app.use(logger('dev'))
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', router)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT + ", hello Neku")
})