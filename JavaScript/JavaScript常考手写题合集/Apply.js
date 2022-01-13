// 函数原型apply方法
Function.prototype.myApply = function (context, argArray) {
  let cxt = context || window;
  let func = Symbol();
  cxt[func] = this;
  let ans = argArray.length === 0 ? cxt[func]() : cxt[func](...argArray);
  delete cxt[func];
  return ans;
};
let obj = {
  a: 1,
  b: 2,
};

function print(c, d) {
  console.log(this.a, this.b, c, d);
}

print.myApply(obj, [5, 6]);
