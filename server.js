const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/mensaje', (req,res) => {
    res.send('Hola Node.js desde Railways!');
})

//por default, las nubes utilizan su propio puerto, debo darle siempre a la nube
//la opcion de usar su propio puerto 
const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor express escuchando en el puerto ${PORT}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
