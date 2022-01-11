// 链式调用，print打印输入的字符，sleep休眠
function Task() {
  this.excutionChain = Promise.resolve();
  this.print = function (val) {
    this.excutionChain = this.excutionChain.then(() => {
      console.log(val);
    });
    return this;
  };
  this.sleep = function (time) {
    this.excutionChain = this.excutionChain.then(() => {
      return new Promise((resolve) => {
        setTimeout(resolve, time);
      });
    });
    return this;
  };
}
let task = new Task();
task.sleep(1000).print(1).sleep(2000).print(3).print(4);
