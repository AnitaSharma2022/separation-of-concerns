/**
 *
 */
export const average = (...arg) => {
      // execute core logic
      console.log(arg[0]);
      if ( arg[0].length ==0){return 0}
      console.log(arg);
      const arg1=arg[0];
//  arg1.push(arg1.length);
return arg1.reduce((sum, next) => sum + next, 0) / arg1.length;

};
