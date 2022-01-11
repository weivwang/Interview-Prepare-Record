// 函数原型call方法
Function.prototype.myCall = function (context, ...arg) {
  let cxt = context || window;
  let func = Symbol();
  cxt[func] = this;
  let args = [...arg];
  let ans = args.length === 0 ? cxt[func]() : cxt[func](...arg);
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

print.myCall(obj, 5, 6);
