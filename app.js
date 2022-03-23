const express = require('express')
const app = express()
const {create} = require('express-handlebars')
const shortURL = require('./routes/home')
const auth = require('./routes/auth')
require('dotenv').config()


// Handlebars
const hbs = create({
    extname: ".hbs",
    partialsDir:['views/components'],
})

app.engine('.hbs', hbs.engine)
app.set('view engine', '.hbs')
app.set('views', './views')
// Fin de configuraciones de handlebars


// Middlewares
app.use(express.static('public'))

// Routes
app.use('/', shortURL)
app.use('/auth', auth)

// Server runing
const port = process.env.PORT || 1200

app.listen(port, () => {
    console.log(`Runing in port ${port}`)
  })