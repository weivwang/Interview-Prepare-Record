Array.prototype._map = function (fn, context) {
  let cxt = context ? context : global;
  let arr = Array.prototype.slice.call(this);
  return arr.reduce((total, current, index, arr) => {
    return [...total, fn.call(cxt, current, index, arr)];
  }, []);
};
