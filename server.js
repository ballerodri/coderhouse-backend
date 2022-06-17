const express = require('express')
const app = express()
const puerto = 8080
const rutas = require('./routes/index')

app.use(express.json()) // estas 2 lineas se usan cuando necesito leer data del body
app.use(express.urlencoded({ extended: true})) 
app.use('/public', express.static(__dirname +'/public'))

app.use('/', rutas)

app.listen(puerto, (err) => {
    if(err) {
        console.log(`Se produjo un error al iniciar el servidor ${err}`)
    } else {
        console.log(`El servidor esta escuchando en el puerto: ${puerto}`)
    }
})