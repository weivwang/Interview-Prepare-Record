// 防抖函数实现，可能不完整
function debounce(fn, time) {
  let id = null;
  return function (...arg) {
    if (!id) clearTimeout(id);
    id = setTimeout(() => fn.apply(this, arg), time);
  };
}
