let obj = {
  a: 1,
  b: {
    c: 3,
  },
  d: 4,
};
let proxyObj = new Proxy(obj, {
  get(target, key) {
    console.log(target, key);
    return target[key];
  },
  set(target, key, value) {
    
    console.log(target, key, value);
  },
});

console.log(proxyObj.b.c);
