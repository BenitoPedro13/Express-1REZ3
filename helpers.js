const pg = require('./db.js')
const jwt = require('jsonwebtoken')

module.exports = {
    paginar(limit, page = 1, pages) {
        const start = limit * page - limit;
        const end = start + Number(limit)
        const pagina = pages.slice(start, end)
        return pagina
    },
    async emailToId(email){
        try {
            const usuario = await pg.query('SELECT * FROM usuarios WHERE email = $1', [email])
            return usuario.rows[0].id
        } catch (error) {
            console.error(error)
            throw error
        }
    },
    buildToken(payload){
        const secret = '0Dvvrvh7wROPQKzS6He3Nz7hv9fyvnNrszCKpbHBfzQHy948np'
        const token = jwt.sign(payload, secret, {expiresIn: 86400})
        return token
    },
    async verify(req, res, next){
        const secret = '0Dvvrvh7wROPQKzS6He3Nz7hv9fyvnNrszCKpbHBfzQHy948np'
        console.log(req.headers)
        const token = req.headers['x-access-token']
        if (!token) return res.status(401).json({ success: false, message: 'No token provided.' })
        await jwt.verify(token, secret, (err, decoded) => {
            if (err) return res.status(500).json({ success: false, message: 'Failed to authenticate token.' })
            req.userId = decoded.id;
            next();
        })
    }

}