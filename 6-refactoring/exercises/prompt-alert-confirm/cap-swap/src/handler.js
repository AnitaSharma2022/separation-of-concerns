import { capSwap } from './util.js';

export const capSwapHandler = () => {
    // read & process user input
  let userInput = null;
  while (userInput === null) {
    userInput = prompt('enter a string to cap-swap');
  }
  //result to the user
  const capSwap =capSwap(userInput);
  alert(capSwapped);
};
