const Url = require('../models/Url')
const {nanoid} = require('nanoid')

const leerUrls = async(req,res) =>{
    try {
        const urls = await Url.find().lean()
        res.render('home',{urls})
    } catch (error) {
        
    }
}

const agregarUrl = async(req,res)=>{
    const {origin} = req.body
    try {
        const url = new Url({origin, shortURL: nanoid(4)})
        await url.save()
        res.redirect('/')
    } catch (error) {
        res.send(error)
    }
}

const eliminarUrl = async(req, res)=>{
    const {id} = req.params 
    try {
        await Url.findByIdAndDelete(id)
        res.redirect('/')
    } catch (error) {
        res.send(error)
    }
}

const editarUrlForm = async(req,res)=>{
    const {id} = req.params
    try {
        const url = await Url.findById(id).lean()
        res.render('home', {url})
    } catch (error) {
        res.send(error)
    }
}

const editarUrl = async(req,res)=>{
    const {id} = req.params
    const {origin} = req.body
    try {
        await Url.findByIdAndUpdate(id, {origin}).lean()
        res.redirect('/')
    } catch (error) {
        res.send(error)
    }
}

const redirect = async(req,res)=>{
    const {shortURL} = req.params
    try {
        const urlDB = await Url.findByIdAndRemove({shortURL})
        res.redirect(urlDB.origin)
    } catch (error) {
        return error
    }
}

module.exports = {
    leerUrls,
    agregarUrl,
    eliminarUrl,
    editarUrlForm,
    editarUrl,
    redirect
}