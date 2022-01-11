// review
function New(func, ...args) {
  if (typeof func !== "object") throw "not function";
  let obj = Object.create(func.prototype);
  let rtn = func.call(obj, ...args);
  let isObject = typeof rtn === "object" && rtn !== null;
  let isFunction = typeof rtn === "function";
  if (isObject || isFunction) return rtn;
  return obj;
}
