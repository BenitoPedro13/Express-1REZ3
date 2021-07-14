const TransacaoDAO = require('../dao/transacaoDAO.js')
const {emailToId} = require('../helpers.js')

class TransacaoAPI {

    static async getCompras(email){
        try {
            const comprador_id = await emailToId(email)
            const compras = await TransacaoDAO.getCompras(comprador_id)
        
            return compras.rows
        } catch (error) {
            console.error(error)
            return {success: false}
        }
    }
    static async getVendas(email){
        try {
            const vendedor_id = await emailToId(email)
            const vendas = await TransacaoDAO.getVendas(vendedor_id)

            return vendas.rows
        } catch (error) {
            console.error(error)
            return {success: false}
        }
    }
    static async postTransacao(email_comprador, vendedor_id, produto, endereco){
        try {
            const {cep, rua, numero, bairro, cidade, estado} = endereco
            const comprador_id = await emailToId(email_comprador)

            const response = await TransacaoDAO.postTransacao(comprador_id, vendedor_id, produto, cep, rua, numero, bairro, cidade, estado)
            return response
        } catch (error) {
            console.error(error)
            return {success: false}
        }
    }
}

module.exports = TransacaoAPI