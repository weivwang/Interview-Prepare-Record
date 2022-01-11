function Single(val) {
  this.val = val;
  this.instance = null;
}
Single.getInstance = function (val) {
  if (this.instance) return this.instance;
  this.instance = new Single(val);
  return this.instance;
};
let a = Single.getInstance(123);
let b = Single.getInstance(345);
console.log(a,b)
