
let currentPressure = 0;
let keypressPressure = 500; // Generalized value for 50g keypress, 500 Pascal
let pressureBulbs = 0;
let pressureBulbPressure = 1866.5;

const theNumberElem = document.getElementById('theNumber');

const pressureButton = () => {
    currentPressure += keypressPressure;
    theNumberElem.innerHTML = currentPressure;
};

const squeezeBulb = () => {
    currentPressure += pressureBulbPressure;
    theNumberElem.innerHTML = currentPressure;
};
