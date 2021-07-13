const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app.all('*', (req, res) => {
    res.send(`
        <h1>Pagina nao encontrada, deseja retornar para a Home ?</h1>
        <a href="https://www.quantic.digital">Voltar para Home</a>
    `)
})

app.listen(3000, () => console.log('Server running on port 3000....'))