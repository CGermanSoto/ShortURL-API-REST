const express = require('express')
const { 
    leerUrls, 
    agregarUrl, 
    eliminarUrl, 
    editarUrlForm,
    editarUrl,
    redirect
} = require('../constrollers/homeControllers')
const router = express.Router()

const urlValidar = require('../middlewares/urlValidar')

router.get('/', leerUrls)
router.post('/', urlValidar, agregarUrl)
router.get('/eliminar/:id', eliminarUrl)
router.get('/editar/:id', editarUrlForm)
router.post('/editar/:id', urlValidar, editarUrl)
router.get('/:shortURL', redirect)
module.exports = router