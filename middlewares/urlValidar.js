const {URL} = require('url')

const validarUrl = (req,res,next) =>{
    try {
        const {origin} = req.body
        const urlFrontend = new URL(origin)
        if (urlFrontend.origin !== "null"){
            return next()
        } else {
            throw new Error ('URL NO VÁLIDA')
        }
    } catch (error) {
        return res.send('URL NO VALIDA')
    }
}

module.exports = validarUrl