/**
 *
 */

export const saveNoCopies = (...arg) => {
  const arg1=arg[0];
  const arg2=arg[1];
  if(arg2===undefined){return arg}
  const alreadySaved = arg1.includes(arg2);
  if (!alreadySaved) {
    arg1.push(arg2);
  }
console.log(arg1);
  return  arg1;
};
