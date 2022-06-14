const fs = require('fs')

class Contenedor {
    constructor(fileName) {
        this.fileName = fileName
    }

    async save(objeto) {
        let data = await fs.promises.readFile(`./${this.fileName}`, 'utf-8')

        if(!data) {
            objeto.id = 1
            const arr = [objeto]
            await fs.promises.writeFile(`./${this.fileName}`, JSON.stringify(arr))
            return objeto.id
        } else {
            data = JSON.parse(data);
            objeto.id = data.length+1
            data.push(objeto)
            await fs.promises.writeFile(`./${this.fileName}`, JSON.stringify(data))
            return objeto.id
        }
    }

    async getAll() {
        const data = JSON.parse(await fs.promises.readFile(`./${this.fileName}`,  'utf-8'))

        return data
    }

    async getRandom() {
        const data = JSON.parse(await fs.promises.readFile(`./${this.fileName}`,  'utf-8'))
        let random = Math.floor((Math.random() * data.length ) + 0);
        return data[random]
    }
    
}

const productos = new Contenedor('productos.txt')

const express = require('express')
const app = express ()
const puerto = 8080

app.get('/productos', productsController)
app.get('/productoRandom', productsRandomController)

app.listen(puerto, () => {
    console.log(`Servidor escuchando puerto: ${puerto}`)
})

async function productsController(req, res) {
    const response = await productos.getAll()

    res.send(response)
}

async function productsRandomController(req, res) {
    const response = await productos.getRandom()

    res.send(response)
}