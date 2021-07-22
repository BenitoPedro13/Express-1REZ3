const pg = require('./db.js')
const path = require('path') 
const jwt = require('jsonwebtoken')
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, 'public', 'img'))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + file.originalname.match(/\.[0-9a-z]+$/i)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  

module.exports = {
    paginar(limit, page = 1, pages) {
        const start = limit * page - limit;
        const end = start + Number(limit)
        const pagina = pages.slice(start, end)
        return pagina
    },
    upload: multer({storage: storage}),
    async emailToId(email){
        try {
            const usuario = await pg.query('SELECT * FROM usuarios WHERE email = $1', [email])
            return usuario.rows[0].id
        } catch (error) {
            console.error(error)
            throw error
        }
    },
    async IdToEmail(id){
        try {
            const usuario = await pg.query('SELECT * FROM usuarios WHERE id = $1', [id])
            return usuario.rows[0].email
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
        const JWT = req.jwt
        if(JWT){
            await jwt.verify(JWT, secret, (err, decoded) => {
                if (err) return res.status(500).json({ success: false, message: 'Failed to authenticate token.' })
                req.usuario_id = decoded.usuario
            })
            return req.usuario_id
        }
        const token = req.headers['x-access-token']
        if (!token) return res.status(401).json({ success: false, message: 'No token provided.' })
        await jwt.verify(token, secret, (err, decoded) => {
            if (err) return res.status(500).json({ success: false, message: 'Failed to authenticate token.' })
            req.userId = decoded.usuario
            next();
        })
    }

}