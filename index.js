const express = require("express")
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;


// Setting up the correct environment
if(!process.env.NODE_ENV)
    process.env.NODE_ENV = 'development'
require('dotenv').config({ path: `./environments/.env.${process.env.NODE_ENV}` })


// ======== Routes ==========
const moviesRouter = require('./routes/movies');
app.use('/movies', moviesRouter);



app.listen(port, () => {
    console.log(process.env.MONGO_CONNECTION_STRING);
    console.log(`The Server is running on port: ${port}`);
})