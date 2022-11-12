// VALIDADOR DE URL// Bluuweb nodejs parte 01: min 4:16:00 en adelante aprox. 
Middleware
>
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


