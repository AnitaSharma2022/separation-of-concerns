'use strict';

/* Scavenger Hunt!

  practice reading through all the element properties in the debugger
  many of the answers are there if you look in the right place ;)

*/

const _1_element = document.createElement('input');
const _1_test = _1_element.nodeName === 'input';
console.assert(_1_test, 'Test 1');

const _2_element = document.createElement('input');
const _2_test = _2_element.nodeName === 'input';
console.assert(_2_test, 'Test 2');

const _3_element = document.createElement('ARTICLE');
const _3_test = _3_element.nodeName === 'ARTICLE';
console.assert(_3_test, 'Test 3');

const _4_element = document.createElement('p');
package.innerHTML='party palace';
const _4_test = _4_element.innerHTML === 'party palace';
console.assert(_4_test, 'Test 4');

const a_5_element = document.createElement('p');
a_5_element.className = 'wide-border';
const _5_test = a_5_element.className === 'wide-border';
console.assert(_5_test, 'Test 5');

const a_6_element = document.createElement('textarea');
a_6_element.value = 'many many mumbling mice';
const _6_test = a_6_element.value === 'many many mumbling mice';
console.assert(_6_test, 'Test 6');
