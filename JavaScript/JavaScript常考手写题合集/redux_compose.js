function compose(funcs) {
  return funcs.reduce(
    (total, next) =>
      (...args) =>
        total(next(...args))
  );
}
const func1 = function (action) {
  return () => {
    console.log("func1");
    action();
    console.log("func1 end");
  };
};

const func2 = function (action) {
  return () => {
    console.log("func2");
    action();
    console.log("func2 end");
  };
};

const func3 = function (action) {
  return () => {
    console.log("func3");
    console.log("func3 end");
  };
};

let func = compose([func1, func2, func3]);
func()();
