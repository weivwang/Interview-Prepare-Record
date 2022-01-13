function promisefy(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (error, data) => {
        if (error) {
          reject(error);
          return;
        } else {
          resolve(data);
        }
      });
    });
  };
}
