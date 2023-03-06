const path = require('path');
const fs = require('fs');

const { expressjwt: jwt } = require("express-jwt");

const publicKey = fs.readFileSync(path.resolve('backend/autenticazione/public.key'), 'utf8');

jwt({
    secret: publicKey, algorithms: ["RS256"], getToken: function fromHeaderOrQuerystring(req) {
        if (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {
            return req.headers.authorization.split(" ")[1];
        } else if (req.query && req.query.token) {
            return req.query.token;
        }
        return null;
    }
});



module.exports = jwt;