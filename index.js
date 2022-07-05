const express = require('express')

const app = express()
//DB conect
const mongoose = require('mongoose')
mongoose.connect('node_modules\mongoose\lib\index.js').then(()=> console.log('Conectado a BD'))

app.get('/saluda', (req,res) => res.send('Hola Mundo'))
app.get('/saludaJSON', (req,res) => res.json({
    message: 'Hola Mundo',
    date: new Date(),
    campus: 'madrid'


}))

app.listen(5005, () => console.log('Esta Picha funciona'))