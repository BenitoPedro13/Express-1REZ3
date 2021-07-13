const pg = require('../db.js')

class UsuarioDAO {
    static async getUsuario(id){
        try {
            const usuario = await pg.query('SELECT * FROM usuarios WHERE email = $1', [id])
            return usuario.rows
        } catch (error) {
            return console.error(error)
        }
    }
    static async postUsuario(nome, email, senha, cep, rua, numero, bairro, cidade, estado) {
        try {
            await pg.query(`INSERT INTO usuarios(nome, email, senha, cep, rua, numero, bairro, cidade, estado)
                            VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
                            [nome, email, senha, cep, rua, numero, bairro, cidade, estado])
            return true
        } catch (error) {
            console.error(error)
            return false
        }
    }
}

module.exports = UsuarioDAO