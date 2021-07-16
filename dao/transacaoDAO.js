const pg = require('../db.js')

class TransacaoDAO {
    static async getCompras(comprador_id){
        try {

            const compras = await pg.query(`SELECT transacoes.*, usuarios.email
                                            FROM transacoes INNER JOIN usuarios ON id = $1
                                            WHERE comprador_id = $1`, [comprador_id])
            return compras

        } catch (error) {
            console.error(error)
            return {success: false}
        }
    }
    static async getVendas(vendedor_id){
        try {
            
            const vendas = await pg.query(`SELECT transacoes.*, usuarios.email
                                           FROM transacoes INNER JOIN usuarios ON id = $1
                                           WHERE vendedor_id = $1`, [vendedor_id])
            return vendas

        } catch (error) {
            console.error(error)
            return {success: false}
        }
    }
    static async postTransacao(comprador_id, vendedor_id, produto, endereco){
        try {
            await pg.query(`INSERT INTO transacoes(comprador_id, vendedor_id, produto, endereco)
                            VALUES($1, $2, $3, $4)`,
                            [comprador_id, vendedor_id, produto, endereco]) 

            return {success: true}
        } catch (error) {
            console.error(error)
            return {success: false}
        }
    }
}

module.exports = TransacaoDAO