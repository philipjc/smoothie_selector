
/**
 * Generate random number. Re-generate if the same number
 */
const numberGen = function(maxVal, old) {
  let number = Math.random() * (maxVal);
  number = Math.floor(number);

  if (old.indexOf(number) !== -1) {
    numberGen(maxVal, old);
  }
  return number;
};

export default numberGen;
