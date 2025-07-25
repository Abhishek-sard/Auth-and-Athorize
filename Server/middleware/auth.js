const jwt = require('jsonwebtoken');

const auth = (roles = []) => {
    return (req, res, next) => {
        const token = req.headers.authorization?.split( " ")[1];
        if(!token) return res.status(401). json({message: "No Token"});


        jwt.verify(token, process.env.JWT)
    }
}