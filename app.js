const express = require('express')
const app = express()
const {create} = require('express-handlebars')
require('dotenv').config()


// Handlebars
const hbs = create({
    extname: ".hbs"
})

app.engine('.hbs', hbs.engine)
app.set('view engine', '.hbs')
app.set('views', './views')

// Fin de configuraciones de handlebars

// Routes handlebars
app.get('/', (req,res)=>{
    res.render('home')
})

app.get('/login', (req,res)=>{
    res.render('login')
})

// Middlewares
app.use(express.static('public'))


// Server runing
const port = process.env.PORT || 1200

app.listen(port, () => {
    console.log(`Runing in port ${port}`)
  })