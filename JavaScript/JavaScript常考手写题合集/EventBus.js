// 发布订阅模式

function EventBus() {
  this.events = {};
  this.add = function (name, cb) {
    if (this.events[name]) this.events[name].push(cb);
    else {
      this.events[name] = [];
      this.events[name].push(cb);
    }
  };
  this.on = function (name, ...args) {
    if (this.events[name] && this.events[name].length > 0) {
      this.events[name].forEach((item) => item(...args));
    }
  };
  this.off = function (name, cb) {
    if (this.events[name] && this.events[name].length > 0) {
      this.events[name].filter((item) => item !== cb);
    }
  };
}

let eventbus = new EventBus();
let handler = function (val) {
  console.log(val);
};
eventbus.add("test1", handler);
eventbus.on("test1", 1);
