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

function runCalculator() {
    console.log('clicked equals');

} // end runCalculator

function plusOperator() {
    console.log('clicked plus');

} // end plusOperator

function minusOperator() {
    console.log('clicked minus');

} // end minusOperator

function multiplyOperator() {
    console.log('clicked multiply');

} // end multiplyOperator

function divideOperator() {
    console.log('clicked divide');

} // end divideOperator

function clearCalc() {
    console.log('clicked clear');

} // end clearCalc