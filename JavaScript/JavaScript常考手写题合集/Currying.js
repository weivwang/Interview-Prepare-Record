// 函数柯里化
function currying(fn, ...args) {
  if (fn.length <= args.length) return fn(...args);
  else {
    return function (...nextArgs) {
      return currying(fn, ...args.concat(nextArgs));
    };
  }
}
let add = function (a, b, c) {
  console.log(a + b + c);
};
let curryAdd = currying(add);
curryAdd(1, 2)(3);
