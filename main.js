
let currentPressure = 0;
let keypressPressure = 50;

const theNumberElem = document.getElementById('theNumber');

const pressureButton = () => {
    currentPressure += keypressPressure;
    theNumberElem.innerHTML = currentPressure.toString();
};
