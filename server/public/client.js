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

function runCalculator() {
    console.log('clicked equals');
    equationObject.numberOne = $('#firstNumIn').val();
    equationObject.numberTwo = $('#secondNumIn').val();
    console.log(equationObject);

    $.ajax({
        url: '/calculator',
        type: 'POST',
        data: equationObject
    }).then(function (response) {
        console.log(response);
        // getResponseFromServer();
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

function getResponseFromServer() {
    $.ajax({
      url: '/calculator',
      type: 'GET'
    }).then(function (response) {
      console.log('response from server:', response);
    });
  } // end getResponseFromServer