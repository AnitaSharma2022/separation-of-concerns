import { average } from './util.js';
import { data } from '.../../data/state.js';

export const runningAverageHandler = () => {
     // read & process user input
  const userInput = prompt('add a number to the running average');
  if (userInput === null) {
    alert('good bye');
    return;
  }

  const newNumber = Number(userInput);
  if (Number.isNaN(newNumber) || userInput === '') {
    alert(`"${userInput}" is not a valid number`);
    return;
  }

    // communicate result to user
    const message =average(...arg);
    alert(message);
  
};
