function jsonp(url, cb) {
  let functionName = `callback${Number(new Date())}`;
  window[functionName] = function (res) {
    cb(res);
  };
  let script = document.createElement("script");
  script.src = `url?callback=${functionName}`;
  document.appendChild(script);
  delete window[functionName];
}
