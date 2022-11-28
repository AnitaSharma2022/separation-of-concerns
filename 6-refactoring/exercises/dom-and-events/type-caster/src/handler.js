import { typeCaster } from './util';

export const castTheValue = event => {
    //read & process user input
  const form = event.target.form;
  const intendedType = form.type.value;
  const stringToCast = form.value.value;

// render result for user
const newValue=typeCaster(stringToCast,intendedType);
document.getElementById('casted-value').innerHTML =
    typeof newValue + ': ' + newValue;
};
