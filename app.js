const express = require('express')
const app = express()
// Template engine
const {create} = require('express-handlebars')
//Routes for middlewares
const shortURL = require('./routes/home')
const auth = require('./routes/auth')
//Database connect
const connectDB = require('./db/connect')
// DOTENV
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

const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI);
      app.listen(port, () =>
        console.log(`Server and Database runing in port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };

start();