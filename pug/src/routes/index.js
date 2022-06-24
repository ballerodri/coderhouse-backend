const { Router } = require('express')
const router = Router()
const { getForm, getProductos, postProductos } = require('../controllers/productosController')

router.get('/', getForm)
router.get('/productos', getProductos)
router.post('/productos', postProductos)

module.exports = router
