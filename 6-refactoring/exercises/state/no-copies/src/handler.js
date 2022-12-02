import { saveNoCopies } from './util.js';
import { data } from '.../../data/state.js';

export const saveNoCopiesHandler = () => {
    // read & process user input
  let userInput = null;
  while (userInput === null) {
    userInput = prompt('enter a string to save');
  }
  // communicate result to user
 //let ab=[...data.noCopies]
  const message = saveNoCopies(...arg);
  alert(message);

};
