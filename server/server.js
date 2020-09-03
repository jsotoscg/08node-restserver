require('./config/config');

const express = require('express')
const { request } = require('express')
const app = express()

const bodyParser = require('body-parser')
    // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())

app.get('/usuario', function(req, res) {
    res.json('GET USUARIO')
})

app.post('/usuario', function(req, res) {
    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: "El nombre es necesario",
            error: 01
        })
    } else {

        res.json({
            body
        })
    }
})

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id

    res.json({
        id
    })
})

app.patch('/usuario', function(req, res) {
    res.json('PATCH USUARIO')
})

app.delete('/usuario', function(req, res) {
    res.json('DELETE USUARIO')
})

app.listen(process.env.PORT, () => {
    console.log(`ESCUCHANDO EN EL PUERTO ${process.env.PORT}`);
})