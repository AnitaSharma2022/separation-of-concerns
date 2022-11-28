 import { reverseAndUpper } from './util';

export const reverseAndUpperHandler = event => {
    // read and process user input
    const input = event.target.value;

        const reversedUppercase =reverseAndUpper(input)
        //render result for user
    document.getElementById('output').innerHTML = reversedUppercase;

};
