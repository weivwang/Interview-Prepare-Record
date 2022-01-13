
class LazyMan {
  constructor() {
    this.tasks = [];
    setTimeout(() => {
      this.next();
    }, 0);
  }
  next() {
    let fn = this.tasks.shift();
    typeof fn == "function" && fn();
  }

  eat(something) {
    let fn = () => {
      console.log("Eat " + something + "~");
      this.next();
    };
    this.tasks.push(fn);
    return this;
  }
  sleep(time) {
    let fn = () => {
      setTimeout(() => {
        console.log("Wake up after " + time + "s!");
        this.next();
      }, time * 1000);
    };
    this.tasks.push(fn);
    return this;
  }
  sleepFirst(time) {
    let fn = () => {
      setTimeout(() => {
        console.log("Wake up after " + time + "s!");
        this.next();
      }, time * 1000);
    };
    this.tasks.unshift(fn);
    return this;
  }
}
new LazyMan("ian").eat("apple").sleepFirst(1).sleep(1).eat("banana");
