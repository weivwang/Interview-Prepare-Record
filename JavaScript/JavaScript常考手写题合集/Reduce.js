Array.prototype.reduce = function (fn, init) {
  let arr = this;
  let total = init ? init : arr[0];
  for (let i = init ? 0 : 1; i < arr.length; i++) {
    total = fn(total, arr[i], i, arr);
  }
  return total;
};
let array = [1, 2, 3, 4, 5, 6];
console.log(
  array.reduce((total, item, index) => {
    return total + item;
  })
);
