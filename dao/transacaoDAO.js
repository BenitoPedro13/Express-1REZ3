const pg = require('../db.js')

class TransacaoDAO {
    static async getCompras(comprador_id){
        try {

            const compras = pg.query(`SELECT * FROM transacoes WHERE comprador_id = $1`, [comprador_id])
            return compras

        } catch (error) {
            console.error(error)
            return {success: false}
        }
    }
    static async getVendas(vendedor_id){
        try {
            
            const vendas = pg.query(`SELECT * FROM transacoes WHERE vendedor_id = $1`, [vendedor_id])
            return vendas

        } catch (error) {
            console.error(error)
            return {success: false}
        }
    }
    static async postTransacao(comprador_id, vendedor_id, produto, cep, rua, numero, bairro, cidade, estado){
        try {
            await pg.query(`INSERT INTO transacoes(comprador_id, vendedor_id, produto, cep, rua, numero, bairro, cidade, estado)
                            VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
                            [comprador_id, vendedor_id, produto, cep, rua, numero, bairro, cidade, estado]) 

            return {success: true}
        } catch (error) {
            console.error(error)
            return {success: false}
        }
    }
}

module.exports = TransacaoDAO