const pg = require('../db.js')

class ProdutoDAO {
    static async getProdutoById(id) {
        try {
            const produto = await pg.query('SELECT * FROM produtos WHERE id = $1', [id])
            return produto.rows[0]
        } catch (error) {
            console.error(error)
        }
    }
    static async getProdutos(query = null){

        let produtos
        try {
            if(query){
                const search = query.toString()
                produtos = await pg.query(`SELECT * FROM produtos WHERE nome ~* '.*${search}.*'`)
                return produtos.rows
            }
            else {
                produtos = await pg.query(`SELECT * FROM produtos`)
                return produtos.rows
            } 
        } catch (error) {
            console.error(error)
        }

    }
    static async getProdutosUsuario(query){
        try {
            const usuario_id = await this.emailToId(query)
            const produtos = await pg.query('SELECT * FROM produtos WHERE usuario_id = $1', [usuario_id])
            return produtos.rows
        } catch (error) {
            console.error(error)
            return {success: false}
        }   
    }
    static async postProduto(nome, email, preco, descricao, fotos = false){
        const usuario_id = await this.emailToId(email)
        try {
            if(!fotos){
                const response = await pg.query(`INSERT INTO produtos(nome, usuario_id, preco, descricao)
                                                VALUES($1, $2, $3, $4)`,
                                                [nome, usuario_id, preco, descricao])
                return true
            }
            const response = await pg.query(`INSERT INTO produtos(nome, usuario_id, preco, descricao, fotos)
                                            VALUES($1, $2, $3, $4, $5)`,
                                            [nome, usuario_id, preco, descricao, fotos])
            return true
        } catch (error) {
            console.error(error)
            return false
        }
    }
    static async deleteProduto(id){
        try {
            await pg.query('DELETE FROM produtos WHERE id = $1', [id])
            return {success: true}
        } catch (error) {
            console.error(error)
            return {success: false}
        }
    }
    static async emailToId(email){
        try {
            const usuario = await pg.query('SELECT * FROM usuarios WHERE email = $1', [email])
            return usuario.rows[0].id
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}

module.exports = ProdutoDAO