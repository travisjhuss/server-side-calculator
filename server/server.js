const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('server/public'));

// array for calculation history
let calculationHistory = [];

function calculateObject(object) {
    console.log('object to run:', object);
    // grab the object, check what the operator is and run math accordingly, adding the result as a new property
    switch (object.operator) {
        case "+":
            console.log(`${object.numberOne} plus ${object.numberTwo}`);
            object.results = Number(object.numberOne) + Number(object.numberTwo);
            break;
        case "-":
            console.log(`${object.numberOne} minus ${object.numberTwo}`);
            object.results = Number(object.numberOne) - Number(object.numberTwo);
            break;
        case "*":
            console.log(`${object.numberOne} times ${object.numberTwo}`);
            object.results = Number(object.numberOne) * Number(object.numberTwo);
            break;
        case "/":
            console.log(`${object.numberOne} divided by ${object.numberTwo}`);
            object.results = Number(object.numberOne) / Number(object.numberTwo);
            break;

    } // end switch
    // Push that object into the server side's array
    calculationHistory.push(object);

} // end calculateObject


// GET route
app.get('/calculator', (req, res) => {
    // send server side array to front end
    res.send(calculationHistory);
});

app.post('/calculator', (req, res) => {
    let numbersToCrunch = req.body;
    // call application to run math
    calculateObject(numbersToCrunch);
    res.sendStatus(201);
});

//attempt at app.delete
app.delete('/calculator', function (req, res) {
    // empty array
    calculationHistory = [];
    // send back
    res.send(calculationHistory)
});


app.listen(PORT, () => {
    console.log('Server is running on port:', PORT)
});