const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    const urls = [
        {origin: "www.google.com.ar/hola", shortURL: "AKQJA5Z754"},
        {origin: "www.google.com.ar/holaMundo", shortURL: "AKQA6Q754"},
        {origin: "www.google.com.ar/NodeJs", shortURL: "AKQZX22754"},
        {origin: "www.google.com.ar/Paramore", shortURL: "AKQZXpar754"}
    ]
    res.render('home',{urls})
})

module.exports = router