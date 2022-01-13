function throttle(fn, delay) {
  let flag = true;
  return function (...arg) {
    flag = false;
    if (flag) {
      setTimeout(() => {
        fn.apply(this, arg);
        flag = true;
      }, delay);
    }
  };
}
