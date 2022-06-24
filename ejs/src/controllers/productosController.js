const products = []
//const products = [{ title: 'Lapiz', price: 125, thumbnail: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.quieninvento.org%2Fwp-content%2Fuploads%2F2013%2F06%2FLapiz.jpg&f=1&nofb=1'}, { title: 'Goma', price: 10, thumbnail: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcentralpapeleria.es%2F4795-thickbox_default%2Fgoma-de-borrar-milan-caucho-8020-tinta-y-lapiz-ud.jpg&f=1&nofb=1'}, { title: 'Regla', price: 123, thumbnail: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsomosarte.cl%2Fwp-content%2Fuploads%2F2018%2F10%2FRegla20cm.jpg&f=1&nofb=1'}]


const getForm = (req, res) => {
    res.render('form.ejs', { products });
}

const getProductos = (req, res) => {
    res.render('productos.ejs', { products });
}

const postProductos = (req, res) => {
    const { title, price, thumbnail } = req.body
    products.push({ title, price, thumbnail})
    
    res.redirect('/')
}

module.exports = {
    getForm,
    getProductos,
    postProductos
}