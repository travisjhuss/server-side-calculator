const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('server/public'));

// array for calculation history
let calculationHistory = ['test', 'one', 'two'];

function calculateObject(object) {
    console.log('object to run:', object);
    switch (object.operator) {
        case "+":
            console.log(`${object.numberOne} plus ${object.numberTwo}`);
            break;
        case "-":
            console.log(`${object.numberOne} minus ${object.numberTwo}`);
            break;
        case "*":
            console.log(`${object.numberOne} times ${object.numberTwo}`);
            break;
        case "/":
            console.log(`${object.numberOne} divided by ${object.numberTwo}`);
            break;

    } // end switch

} // end calculateObject


// GET route
app.get('/calculator', (req, res) => {
    console.log('inside the calculator!!');
    res.send(calculationHistory);
});

app.post('/calculator', (req, res) => {
    let numbersToCrunch = req.body;
    // console.log(numbersToCrunch);
    // call application to run math
    calculateObject(numbersToCrunch);
    res.sendStatus(201);
});


app.listen(PORT, () => {
    console.log('Server is running on port:', PORT)
});