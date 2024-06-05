const express = require("express")
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));


const port = 3000;

// ======== Routes ==========
const moviesRouter = require('./routes/movies');
app.use('/movies', moviesRouter);



app.listen(port, () => {
    console.log(`The Server is running on port: ${port}`);
})