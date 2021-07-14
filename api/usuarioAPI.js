const UsuarioDAO = require('../dao/usuarioDAO.js')

class UsuarioAPI {
    static async getUsuario(id){
        try {
            const usuario = await UsuarioDAO.getUsuario(id)
            return usuario
        } catch (error) {
            return console.error(error.message)
        }
    }
    static async postUsuario(nome, email, senha, cep, rua, numero, bairro, cidade, estado){

        const usuario = await this.getUsuario(email)

        if(!usuario){
          try {
            const res = await UsuarioDAO.postUsuario(nome, email, senha, cep, rua, numero, bairro, cidade, estado)
            return res
          } catch (error) {
            console.error(error)
            return false
          }  
        }
        return false
    }
}

module.exports = UsuarioAPI 