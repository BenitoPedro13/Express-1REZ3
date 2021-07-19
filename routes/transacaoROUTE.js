const express = require('express')
const router = express.Router()
const TransacaoAPI = require('../api/transacaoAPI.js')
const {verify} = require('../helpers.js')

router.route('')
    .post(verify, async (req, res, next) => {
        try {
            const {comprador_id, vendedor_id, produto, endereco} = req.body
            const response = await TransacaoAPI.postTransacao(comprador_id, vendedor_id, produto, endereco)

            return res.json(response)
        } catch (error) {
            console.error(error)
            return res.json({success: false})
        }
    })
    .get(verify, async (req, res, next) => {
        try {
            const {comprador_id, vendedor_id} = req.query
            if(comprador_id){
                const compras = await TransacaoAPI.getCompras(comprador_id)
                return res.json(compras)
            }
            else{
                const vendas = await TransacaoAPI.getVendas(vendedor_id)
                return res.json(vendas)
            }
        } catch (error) {
            console.error(error)
            return res.json({succes: false})
        }
    })

module.exports = router