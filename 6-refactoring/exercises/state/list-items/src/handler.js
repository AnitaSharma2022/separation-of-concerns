import { list } from './util.js';
import { bulletPoint } from './data.js';

export const listHandler = () => {
    // read & process user input
  const allInputs = [];
  const bulletPoint = '*';
  let acceptingInput = true;
  while (acceptingInput) {
    const nextInput = prompt('enter a list item');
    if (nextInput !== null) {
      allInputs.push(nextInput);
    } else {
      acceptingInput = false;
    }
  }
  //communicate the result to the user
  const message = list(allInputs,bulletPoint);
  alert(message);
};
