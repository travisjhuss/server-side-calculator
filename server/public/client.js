$(document).ready(onReady);

function onReady() {
    console.log('jQuery loaded.');

    $('#equalBtn').on('click', runCalculator);
    $('#plusBtn').on('click', plusOperator);
    $('#minusBtn').on('click', minusOperator);
    $('#multiplyBtn').on('click', multiplyOperator);
    $('#divideBtn').on('click', divideOperator);
    $('#clearBtn').on('click', clearCalc);
    $('#zeroBtn').on('click', zeroButton);
    $('#oneBtn').on('click', oneButton);
    $('#twoBtn').on('click', twoButton);
    $('#threeBtn').on('click', threeButton);
    $('#fourBtn').on('click', fourButton);
    $('#fiveBtn').on('click', fiveButton);
    $('#sixBtn').on('click', sixButton);
    $('#sevenBtn').on('click', sevenButton);
    $('#eightBtn').on('click', eightButton);
    $('#nineBtn').on('click', nineButton);
    $('#pointBtn').on('click', pointButton);

} // end onReady

// defining object to send to server
let equationObject = {};

// --------- BUTTON FUNCTIONS --------- //

function runCalculator() {
    // taking string from calcScreen and separating to determine equation
    let equationString = $('#calcScreen').text();
    // console.log(equationString);
    // take string, split it by the spaces and put in array
    let array = equationString.split(' ');
    // console.log(array);
    // assigning array values to object accordingly to send to server
    equationObject.numberOne = array[0];
    equationObject.operator = array[1];
    equationObject.numberTwo = array[2];
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


function zeroButton() {
    // console.log('clicked zero');
    if ($('#calcScreen').text() !== '0') {
        $('#calcScreen').append('0');
    }

} // end zeroButton

function oneButton() {
    // console.log('clicked one');
    if ($('#calcScreen').text() === '0') {
        $('#calcScreen').text('')
        $('#calcScreen').append('1');
    } else {
        $('#calcScreen').append('1');
    }
} // end oneButton

function twoButton() {
    // console.log('clicked two');
    if ($('#calcScreen').text() === '0') {
        $('#calcScreen').text('')
        $('#calcScreen').append('2');
    } else {
        $('#calcScreen').append('2');
    }

} // end twoButton

function threeButton() {
    // console.log('clicked three');
    if ($('#calcScreen').text() === '0') {
        $('#calcScreen').text('')
        $('#calcScreen').append('3');
    } else {
        $('#calcScreen').append('3');
    }

} // end threeButton

function fourButton() {
    // console.log('clicked four');
    if ($('#calcScreen').text() === '0') {
        $('#calcScreen').text('')
        $('#calcScreen').append('4');
    } else {
        $('#calcScreen').append('4');
    }

} // end fourButton

function fiveButton() {
    // console.log('clicked five');
    if ($('#calcScreen').text() === '0') {
        $('#calcScreen').text('')
        $('#calcScreen').append('5');
    } else {
        $('#calcScreen').append('5');
    }

} // end fiveButton

function sixButton() {
    // console.log('clicked six');
    if ($('#calcScreen').text() === '0') {
        $('#calcScreen').text('')
        $('#calcScreen').append('6');
    } else {
        $('#calcScreen').append('6');
    }

} // end sixButton

function sevenButton() {
    // console.log('clicked seven');
    if ($('#calcScreen').text() === '0') {
        $('#calcScreen').text('')
        $('#calcScreen').append('7');
    } else {
        $('#calcScreen').append('7');
    }

} // end sevenButton

function eightButton() {
    // console.log('clicked eight');
    if ($('#calcScreen').text() === '0') {
        $('#calcScreen').text('')
        $('#calcScreen').append('8');
    } else {
        $('#calcScreen').append('8');
    }

} // end eightButton

function nineButton() {
    // console.log('clicked nine');
    if ($('#calcScreen').text() === '0') {
        $('#calcScreen').text('')
        $('#calcScreen').append('9');
    } else {
        $('#calcScreen').append('9');
    }

} // end nineButton

function pointButton() {
    // console.log('clicked point');
    $('#calcScreen').append('.');

} // end pointButton

function plusOperator() {
    // logic to see if an operator has already been input 
    let display = $('#calcScreen').text();
    if (display.includes('+') || display.includes('-') || display.includes('*') || display.includes('/')) {
        // do nothing
    } else {
        $('#calcScreen').append(' + ');
    }

} // end plusOperator

function minusOperator() {
    // logic to see if an operator has already been input 
    let display = $('#calcScreen').text();
    if (display.includes('+') || display.includes('-') || display.includes('*') || display.includes('/')) {
        // do nothing
    } else {
        $('#calcScreen').append(' - ');
    }

} // end minusOperator

function multiplyOperator() {
    // logic to see if an operator has already been input 
    let display = $('#calcScreen').text();
    if (display.includes('+') || display.includes('-') || display.includes('*') || display.includes('/')) {
        // do nothing
    } else {
        $('#calcScreen').append(' * ');
    }

} // end multiplyOperator

function divideOperator() {
    // logic to see if an operator has already been input 
    let display = $('#calcScreen').text();
    if (display.includes('+') || display.includes('-') || display.includes('*') || display.includes('/')) {
        // do nothing
    } else {
        $('#calcScreen').append(' / ');
    }

} // end divideOperator

function clearCalc() {
    // clear display
    $('#calcScreen').text('0');
} // end clearCalc

// ------------ END BUTTON FUNCTIONS ------------ //

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
    // console.log(object);
    // display latest result in calcOutput
    $('#calcScreen').empty().append(`${object[object.length - 1].results}`);
    // display object array as ul on DOM
    $('#calcHistory').empty();
    for (let i = (object.length - 1); i >= 0; i--) {
        $('#calcHistory').append(`
        <li>${object[i].numberOne} ${object[i].operator} ${object[i].numberTwo} = ${object[i].results}</li>
    `)
    } // end for

} // end appendToDom