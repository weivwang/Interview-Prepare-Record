// 异步队列，最多可以同时执行两个异步任务
class Scheduler {
  constructor() {
    this._max = 2;
    this.unwork = [];
    this.working = [];
  }

  add(asyncTask) {
    return new Promise((resolve) => {
      asyncTask.resolve = resolve;
      if (this.working.length < this._max) {
        this.runTask(asyncTask);
      } else {
        this.unwork.push(asyncTask);
      }
    });
  }

  runTask(asyncTask) {
    this.working.push(asyncTask);
    asyncTask().then(() => {
      asyncTask.resolve(); //asyncTask异步任务完成以后，再调用外层Promise的resolve以便add().then()的执行
      var index = this.working.indexOf(asyncTask);
      this.working.splice(index, 1); //从正在进行的任务队列中删除
      if (this.unwork.length > 0) {
        this.runTask(this.unwork.shift());
      }
    });
  }
}

const timeout = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

const scheduler = new Scheduler();
const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order));
};

addTask(4000, 4);
addTask(2000, 2);
addTask(3000, 3);
addTask(900, 1);
