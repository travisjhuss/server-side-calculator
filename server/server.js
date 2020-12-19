const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

// array for calculation history
let calculationHistory = ['test', 'one', 'two'];


// GET route
app.get('/calculator', (req, res) => {
    console.log('inside the calculator!!');
    res.send(calculationHistory);
});

app.post('/calculator', (req, res) => {
    let postObject = req.body;
    console.log(postObject);
    res.sendStatus(201);
});


app.listen(PORT, () => {
    console.log('Server is running on port:', PORT)
});