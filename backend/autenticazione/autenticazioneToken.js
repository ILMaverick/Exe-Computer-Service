const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');

const authentication = (req, res, next) => {
    const header = req.headers.authorization
    if(!header) {
        return res.status(403).send({
            message: 'Nessuna autenticazione!'
        })
    }
    else {
        const token = (header.split(' '))[1];
        if(token) {
            if((header.split(' '))[2] === 'standard'){
                jwt.verify(token, fs.readFileSync(path.resolve(__dirname + '/public-key-utenti.pem'), 'utf8'),{ algorithms: ['RS256']}, (err) => {
                    if(err) {
                        return res.status(403).send({
                            message: 'Errore nella lettura del token: ' + err
                        })
                    }
                    else {
                        next()
                    }
                });
            } else {
                jwt.verify(token, fs.readFileSync(path.resolve(__dirname + '/public-key-tech.pem'), 'utf8'),{ algorithms: ['RS256']}, (err) => {
                    if(err) {
                        return res.status(403).send({
                            message: 'Errore nella lettura del token: ' + err
                        })
                    }
                    else {
                        next()
                    }
                });
            }
        }
        else {
            return res.status(403).send({
                message: 'Nessun token di accesso'
            })
        }
    }
}



module.exports = authentication;