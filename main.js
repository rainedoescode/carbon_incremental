
import { pressureClick } from "./phases/phase_one.js";

let currentPressure = 0;
let pressureClicks = 0;
const keypressPressure = 500; // Generalized value for 50g keypress, 500 Pascal
let pressureBulbs = 0;
let bulbClicks = 0;
const pressureBulbPressure = 1866.5;

let depressurizeRate = 400;

const fps = 30;

const theNumberElem = document.getElementById('theNumber');

const pressureButton = () => {
    pressureClick(true);
    currentPressure += keypressPressure;
    theNumberElem.innerHTML = currentPressure;
    document.getElementById("pressureBtn").disabled = true;
};

document.getElementById("pressureBtn").addEventListener('click', () => {
    pressureButton();
});

const squeezeBulb = () => {
    currentPressure += pressureBulbPressure;
    theNumberElem.innerHTML = currentPressure;
};

let startTime;
let deltaT;

const updatePressure = (time) => {
    if (startTime === undefined) {
        startTime = time;
    }
    deltaT = (time - startTime) / 1000;
    if (currentPressure > 0 ) {
        // console.log(deltaT);
        currentPressure -= depressurizeRate * deltaT;
        currentPressure = currentPressure < 0 ? 0 : currentPressure;

        theNumberElem.innerHTML = currentPressure.toLocaleString(
            undefined,
            {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            }
        );
    } else {
        document.getElementById("pressureBtn").disabled = false;
    }
    startTime = time;
};

(() => {
    function mainLoop(time) {
        window.requestAnimationFrame(mainLoop);

        updatePressure(time);
    }

    mainLoop();
})();
