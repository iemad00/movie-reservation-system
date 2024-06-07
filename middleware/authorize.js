const handleError = require("../services/errorHandler")

// This is a mock checker middleware, to check the authorization based on the token
const authorize = async (req, res, next) => {
        if (
            req.headers.authorization &&
            req.headers.authorization.split(" ")[0] === "Bearer"
        ) {
            const token = req.headers.authorization.split(" ")[1]
            if(token == "abc") // you need to have (abc) Bearer token to get access :)
                return next()

            return handleError("Unauthorized", 401, next)
        }
        
        return handleError("Unauthorized", 401, next)
}


module.exports = authorize
