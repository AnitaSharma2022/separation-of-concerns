import { formatCoordinates } from './util';

export const showMouseCoordinates = event => {
// read & process user input
const xValue = event.pageX;
const yValue = event.pageY;

// render result for user
const formattedCoordinates=formatCoordinates(xValue,yValue);
document.getElementById('mouse-position').innerHTML = formattedCoordinates;

};
