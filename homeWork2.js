// TASK 1

const numberArray = [1, 2, 3, 4, 5, 6, 7];
Array.prototype.customFilter = function (callback) {
  // your implementation here
  
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

const executedArray = numberArray.customFilter((elem, index, array) => {
  return elem > 3;
});

console.log(executedArray);

// TASK 2

const largeNumbersArray = [29, 56, 101, 177, 48, 196, 517];
Array.prototype.customMap = function (callback) {
  // your implementation here
  
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result[i] = callback(this[i], i, this);
  }
  return result;
};

const arr2 = largeNumbersArray.customMap((elem, index, array) => {
  return elem * 2;
});

console.log(arr2);
