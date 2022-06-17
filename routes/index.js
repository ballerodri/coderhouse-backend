const { Router } = require('express')
const router = Router()
const productos = []
let id = 1

router.get('/api/productos', (req,res) => {
    res.json(productos)
})

router.post('/api/productos', (req,res) => {
    const { title, price, thumbnail } = req.body //body es cuando quiero leer data del body ej formulario html
    
    productos.push({ title, price, thumbnail, id})
    id ++;

    res.sendStatus(201)
})

router.get('/api/productos/:id', (req, res) => {
    const idProd = req.params.id

    if (isNaN(Number(idProd))) {
        return res.json({ error: "El parametro no es un numero" })
    }

    const productoFilter = productos.filter(producto => {
        return producto.id ===  Number(idProd)
    })

    if(!productoFilter.length) res.status(404).json({ error: "producto no encontrado"})
    res.json(productoFilter)
})

router.put('/api/productos/:id', (req, res) => {
    const {title, price, thumbnail} = req.body

    const product = productos.filter(producto => {
        return producto.id === Number(req.params.id)      
    })

    const indice = productos.findIndex(producto => {
        return producto.id === Number(req.params.id)
    })
   
    product[indice].title = title
    product[indice].price = price
    product[indice].thumbnail = thumbnail
    productos[indice] = product[0]
    res.sendStatus(200)
})

router.delete('/api/productos/:id', (req, res) => {
    const indice = productos.findIndex(producto => {
        return producto.id === Number(req.params.id)
    })
    productos.splice(indice, 1) 

    res.sendStatus(200)
})
   
module.exports = router //siempre al final del archivo