/**
 *
 */
export const list = (allInputs,bulletPoint) => {
    // execute core logic
  
  let stringList = '';
  for (const input of allInputs) {
    stringList += `\n${bulletPoint} ${input}`;
  }
  return stringList;
};
