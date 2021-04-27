// TASK 1

const arr1 = [1, 2, 3, 4, 5, 6, 7];
Array.prototype.customFilter = function (callback) {
  // your implementation here
  let arr = this;
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
};

const arr2 = arr1.customFilter((elem, index, array) => {
  return elem > 3;
});

console.log(arr2);

// TASK 2

const arr1 = [1, 2, 3, 4, 5, 6, 7];
Array.prototype.customMap = function (callback) {
  // your implementation here
  let arr = this;
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result[i] = callback(arr[i], i, arr);
  }
  return result;
};

const arr2 = arr1.customMap((elem, index, array) => {
  return elem * 2;
});

console.log(arr2);
