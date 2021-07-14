const express = require('express')
const router = express.Router()
const userAPI = require('../api/usuarioAPI.js')

router.post('', async (req, res, next) => {
    try {
        const {nome, email, senha, cep, rua, numero, bairro, cidade, estado} = req.body
        const response = await userAPI.postUsuario(nome, email, senha, cep, rua, numero, bairro, cidade, estado)
        res.json({success: response})
    } catch (error) {
        console.error(error)
        res.status(500).json({success: false})
    }
})

router.route('/:id')
    .get(async (req, res, next) => {
        try {
            const {id} = req.params
            const usuario = await userAPI.getUsuario(id)
            res.json(usuario)
        } catch (error) {
            console.log(error.message)
            res.status(500).json({error: 'Internal Server Error'})
        }
    }) 

module.exports = router