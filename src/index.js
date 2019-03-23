module.exports = function getZeroscount(number, base) {
  

  let result = number; // the input number
  let numSystem = base; //the imput base (number system)

  for (let i = 2; i <= base; i++) {   //accodring to the task,the integer number
      if (!(numSystem % i)) {
          let midNum = 0;
          let counter = 0;
          let numbers = number;

          while (!(numSystem % i)) {
              midNum++;
              numSystem = Math.floor(numSystem / i);
          }

          while (numbers / i > 0) {
              counter += Math.floor(numbers / i);
              numbers = Math.floor(numbers / i);
          }

          result = Math.min(result, Math.floor(counter / midNum));
      }
  }

  return result;
};
