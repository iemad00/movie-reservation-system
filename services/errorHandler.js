
const handleError = (message, statusCode, next) => {
    const error = new Error(message);
    error.statusCode = statusCode;
    next(error);
}

module.exports = handleError;