let subscribe1 = {
  update(val) {
    console.log("new val changed to" + val);
  },
};
let subscribe2 = {
  update(val) {
    console.log("new val changed to" + val);
  },
};
let subscribe3 = {
  update(val) {
    console.log("new val changed to" + val);
  },
};
function Dep() {
  this.deps = [subscribe1, subscribe2, subscribe3];
}
Dep.prototype.notify = function (newVal) {
  this.deps.forEach((dep) => dep.update(newVal));
};
let pub = {
  val: 3,
};
let dep = new Dep();
Object.defineProperty(pub, "val", {
  set(newVal) {
    dep.notify(newVal);
  },
});
