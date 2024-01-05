/**
 * Initial game phase revolving around exploration and discovery of theme.
 * Simple interactions and numbers.
 */

let pressureBtnClicks = 0;
const keypressPressure = 500; // Generalized value for 50g keypress, 500 Pascal

// TODO: Limit button press speed for initial section
const buttonPhrases = [
    'Press',
    'Press',
    'Press',
    'Hmm...',
    'Pressure',
];

export const pressureClick = (clicked) => {
    if (clicked && pressureBtnClicks < 4) {
        pressureBtnClicks++;
        document.getElementById("pressureBtn").innerHTML = buttonPhrases[pressureBtnClicks];
    }
}

// This won't do



// Keypresses create "Pressure", but it is diffused almost instantly

// Look around
// find pressure-making objects
// hand-bulb for blood pressure cuff


