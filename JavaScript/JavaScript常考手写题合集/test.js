function sleep(time,isReject) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(!isReject)resolve(time);
      reject();
    }, time);
  });
}

Promise.all([
  sleep(1000),sleep(2000,true),sleep(3000)
]).then(res => console.log('success!')).catch(() => console.log('error!'))