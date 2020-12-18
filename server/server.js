const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

// array for calculation history
let calculationHistory = [];






app.listen(PORT, () => {
    console.log('Server is running on port:', PORT)
});