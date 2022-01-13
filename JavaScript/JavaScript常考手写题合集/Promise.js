// 代码很多，要好好看
function Promise(excutor) {
  this.promiseState = "pending";
  this.promiseResult = null;
  this.callbacks = [];
  let that = this;
  function resolve(value) {
    if (that.promiseState !== "pending") return;
    that.promiseState = "fulfilled";
    that.promiseResult = value;
    if (that.callbacks.length > 0) {
      setTimeout(() => {
        that.callbacks.forEach((item) => {
          item.onResolve(value);
        });
      }, 0);
    }
  }
  function reject(reason) {
    if (that.promiseState !== "pending") return;
    that.promiseState = "rejected";
    that.promiseResult = reason;
    if (that.callbacks.length > 0) {
      setTimeout(() => {
        that.callbacks.forEach((item) => {
          item.onReject(reason);
        });
      }, 0);
    }
  }
  try {
    excutor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}
Promise.prototype.then = function (onResolve, onReject) {
  const that = this;
  if (!onResolve) onResolve = (value) => value;
  if (!onReject)
    onReject = (error) => {
      throw error;
    };
  return new Promise((resolve, reject) => {
    if (that.promiseState === "pending") {
      that.callbacks.push({
        onResolve: function () {
          try {
            const result = onResolve(that.PromiseResult);
            if (result instanceof Promise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } catch (error) {
            reject(error);
          }
        },
        onReject: function () {
          try {
            const result = onReject(that.promiseResult);
            if (result instanceof Promise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } catch (error) {
            reject(error);
          }
        },
      });
    } else if (that.promiseState === "fulfilled") {
      setTimeout(() => {
        try {
          const result = onResolve(that.promiseState);
          if (result instanceof Promise) {
            result.then(resolve, reject);
          } else {
            resolve(result);
          }
        } catch (error) {
          reject(error);
        }
      }, 0);
    } else if (that.promiseState === "rejected") {
      setTimeout(() => {
        try {
          const result = onReject(that.promsieState);
          if (result instanceof Promise) {
            result.then(resolve, reject);
          } else {
            reject(result);
          }
        } catch (error) {
          reject(error);
        }
      }, 0);
    }
  });
};

Promise.resolve = function (val) {
  return new Promise((resolve, reject) => {
    if (val instanceof Promise) {
      val.then(resolve, reject);
    }
    resolve(val);
  });
};
Promise.reject = function (reason) {
  return new Promise((resolve, reject) => {
    reject(reason);
  });
};

Promise.all = function (promises) {
  let count = 0;
  let rtn = [];
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      if (promises[i] instanceof Promise)
        promises[i].then(
          (value) => {
            count++;
            rtn[i] = value;
            if (count === promises.length) resolve(rtn);
          },
          (reason) => {
            reject(reason);
          }
        );
    }
  });
};

Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(
        (r) => resolve(r),
        (j) => reject(j)
      );
    }
  });
};
