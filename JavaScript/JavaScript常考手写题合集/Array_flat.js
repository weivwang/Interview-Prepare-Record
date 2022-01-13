// 数组展平方法，k为展平层数
function flat(arr, k) {
  if (k === 0) return arr;
  const length = arr.length;
  let res = [];
  for (let i = 0; i < length; i++) {
    if (Array.isArray(arr[i])) {
      res = [...res, ...flat(arr[i], k - 1)];
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}
let test = [1, 2, [1, 2, 3, [1, 2]], 4, 5];
console.log(flat(test, 10));