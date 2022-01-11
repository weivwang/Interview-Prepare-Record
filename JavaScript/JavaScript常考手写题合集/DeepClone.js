// 对象深复制实现，解决了循环引用问题
let map = new Map();
function deepClone(obj, map) {
  let newObj = obj.constructor === Array ? [] : {};
  let keys = Object.keys(obj);
  for (let key of keys) {
    if (map.has(obj[key])) newObj[key] = obj[key];
    else if (typeof obj[key] === "object") {
      map.set(obj[key], true);
      newObj[key] = deepClone(obj[key], map);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

