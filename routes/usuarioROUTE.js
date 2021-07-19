const express = require('express')
const router = express.Router()
const userAPI = require('../api/usuarioAPI.js')
const {verify, IdToEmail} = require('../helpers.js')

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

router.post('/logar', async (req, res, next) => {
    try {
        const {email, senha, jwt} = req.body
        if(jwt){
            req.jwt = jwt
            const usuario_id = await verify(req, res, next)
            const usuario_email = await IdToEmail(usuario_id)
            const usuario = await userAPI.getUsuario(usuario_email)
            return res.json({login: true, usuario: usuario})
        }
        const response = await userAPI.login(email, senha)
        res.json(response)
    } catch (error) {
        console.error(error)
        res.json({login: false})
    }
})

router.route('/:id')
    .get( async (req, res, next) => {
        try {
            const {id} = req.params
            const usuario = await userAPI.getUsuario(id)
            res.json(usuario)
        } catch (error) {
            console.error(error)
            res.status(500).json({error: 'Internal Server Error'})
        }
    })
    .put( verify, async (req, res, next) => {
        try {
            const {id} = req.params
            const {nome, email, senha, cep, rua, numero, bairro, cidade, estado} = req.body
            const response = await userAPI.putUsuario(id, nome, email, senha, cep, rua, numero, bairro, cidade, estado)
            res.json({success: response})
        } catch (error) {
            console.error(error)
            res.json({success: false})
        }
    }) 

module.exports = router