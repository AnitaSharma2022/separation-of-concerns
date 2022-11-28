import { list } from './util.js';

export const listHandler = () => {
    // read & process user input
  const allInputs = [];
  let acceptingInput = true;
  while (acceptingInput) {
    const nextInput = prompt('enter a list item, cancel when your are done');
    if (nextInput !== null) {
      allInputs.push(nextInput);
    } else {
      acceptingInput = false;
    }
  }
  //result to the user
  const message = list(allInputs);
  alert(message);
};
