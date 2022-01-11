// 函数原型bind方法，注意此实现不能模拟bind方法硬绑定特性
Function.prototype.myBind = function (context, ...arg) {
  const fn = this;
  let args = arg ? arg : [];
  return function newFn(...newFnArgs) {
    if (this instanceof newFn) return new fn(...arg, ...newFnArgs);
    else return fn.apply(context, [...args, ...newFnArgs]);
  };
};
let func = function () {
  return 1;
};
let newFunc = func.myBind();
console.log(newFunc());
