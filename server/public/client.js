$(document).ready(onReady);

function onReady() {
    console.log('jQuery loaded.');

    $('#equalBtn').on('click', runCalculator);
    $('#plusBtn').on('click', plusOperator);
    $('#minusBtn').on('click', minusOperator);
    $('#multiplyBtn').on('click', multiplyOperator);
    $('#divideBtn').on('click', divideOperator);
    $('#clearBtn').on('click', clearCalc);

} // end onReady

// defining object to send to server
let equationObject = {};

// BUTTON FUNCTIONS
function runCalculator() {
    console.log('clicked equals');
    // assigning inputs to values in object to send to server
    equationObject.numberOne = $('#firstNumIn').val();
    equationObject.numberTwo = $('#secondNumIn').val();
    // console.log(equationObject);

    $.ajax({
        url: '/calculator',
        type: 'POST',
        data: equationObject
    }).then(function (response) {
        console.log(response);
        // get calculationHistory from server
        getResponseFromServer();
    });

} // end runCalculator

function plusOperator() {
    delete equationObject.operator;
    console.log('clicked plus');
    equationObject.operator = '+';

} // end plusOperator

function minusOperator() {
    console.log('clicked minus');
    equationObject.operator = '-';

} // end minusOperator

function multiplyOperator() {
    console.log('clicked multiply');
    equationObject.operator = '*';

} // end multiplyOperator

function divideOperator() {
    console.log('clicked divide');
    equationObject.operator = '/';

} // end divideOperator

function clearCalc() {
    console.log('clicked clear');
    $('#firstNumIn').val('');
    $('#secondNumIn').val('');
    delete equationObject.operator;
} // end clearCalc

// GET function
function getResponseFromServer() {
    $.ajax({
        url: '/calculator',
        type: 'GET'
    }).then(function (response) {
        //console.log('response from server:', response);
        // take array from server and put on DOM
        appendToDom(response);
    });
} // end getResponseFromServer

function appendToDom(object) {
    console.log(object);
    // display latest result in calcOutput
    $('#calcOutput').empty().append(`= ${object[object.length - 1].results}`);
    // display object array as ul on DOM
    $('#calcHistory').empty();
    for (let i = (object.length - 1); i >= 0; i--) {
        $('#calcHistory').append(`
        <li>${object[i].numberOne} ${object[i].operator} ${object[i].numberTwo} = ${object[i].results}</li>
    `)
    } // end for

} // end appendToDom