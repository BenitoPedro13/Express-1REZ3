const UsuarioDAO = require('../dao/usuarioDAO.js')
const {emailToId} = require('../helpers.js')

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
    static async putUsuario(id, nome, email, senha, cep, rua, numero, bairro, cidade, estado){

      const usuario = await this.getUsuario(email)
      

      if(usuario){
        try {
          const usuario_id = await emailToId(id)
          const res = await UsuarioDAO.putUsuario(usuario_id, nome, email, senha, cep, rua, numero, bairro, cidade, estado)
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