const express = require("express")
const bodyParser = require('body-parser');
const connectDB = require('./services/db'); 

const app = express();
app.use(express.json());

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;


// Setting up the correct environment
if(!process.env.NODE_ENV)
    process.env.NODE_ENV = 'development'
require('dotenv').config({ path: `./environments/.env.${process.env.NODE_ENV}` })

// ======== Connect to MongoDB ==========
connectDB();

// ======== Routes ==========
const moviesRouter = require('./routes/movies');
app.use('/movies', moviesRouter);


// ======== Global error handling middleware ===========
app.use((err, req, res, next) => {
    console.error(err);
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        success: false,
        message: err.message,
    });
})

app.listen(port, () => {
    console.log(`The Server is running on port: ${port}`);
})