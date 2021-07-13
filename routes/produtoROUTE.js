const express = require('express')
const router = express.Router()
const produtoAPI = require('../api/produtoAPI.js')

router.route('')
    .get(async (req, res, next) => {
        try {
            if(!req.query){
                res.status(404).json({error: 'not found'})
            }
            const {usuario_id} = req.query
            const produtos = await produtoAPI.getProdutosUsuario(usuario_id)
            res.json(produtos)
        } catch (error) {
            console.error(error)
            res.status(505).json({success: false})
        }
        
    })
    .post(async (req, res, next) => {
        try {
            const {nome, usuario_id, preco, descricao, fotos} = req.body
            const response = await produtoAPI.postProduto(nome, usuario_id, preco, descricao, fotos)
            res.json({success: response})
        } catch (error) {
            console.error(error)
            res.json({success: false})
        }
    })

router.delete('/:id', (req, res, next) => {
    try {
        const {id} = req.params
        const response = produtoAPI.deleteProduto(id)
        res.json(response)
    } catch (error) {
        console.error(error)
        res.status(500).json({success: false})
    }
})
    
module.exports = router