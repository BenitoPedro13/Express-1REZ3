const ProdutoDAO = require('../dao/produtoDAO.js')

class ProdutoAPI {
    static async getProdutoById(id){
        try {
            const produto = await ProdutoDAO.getProdutoById(id)
            return produto
        } catch (error) {
            console.error(error)
        }
    }
    static async getProdutos(query){
        try {
            const produtos = await ProdutoDAO.getProdutos(query)
            return produtos  
        } catch (error) {
            console.error(error)
        }
        
    }
    static async getProdutosUsuario(query){
        
        try {
            const produtos = await ProdutoDAO.getProdutosUsuario(query)
            return produtos
        } catch (error) {
            console.error(error)
            return {success: false}
        }
    }
    static async postProduto(nome, usuario_id, preco, descricao, fotos){
        if(fotos && fotos.length === 0){
            const response = await ProdutoDAO.postProduto(nome, usuario_id, preco, descricao)
            return response
        }
        const response = await ProdutoDAO.postProduto(nome, usuario_id, preco, descricao, fotos)
        return response
    }
    static async deleteProduto(id){
        try {
            const response = await ProdutoDAO.deleteProduto(id)
            return response
        } catch (error) {
            console.error(error)
            return {success: false}
        }
    }
}

module.exports = ProdutoAPI