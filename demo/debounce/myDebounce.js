
//用 Promise 封装 函数防抖处理，  返回的是一个Promise
function myDecounce2(fn, duration) {
  let promise = null;
  let _rej = null;
  return (...args) => {

    //拿到promise的reject ，(duration时间内，如果重复触发)在promise外部 取消该promise。
    if (_rej) _rej({
      name: "abort",
      message: "the promise is aborted",
      aborted: true
    });

    //   promise = null;

    promise = new Promise((resolve, reject) => {
      _rej = reject;

      setTimeout(() => {
        resolve();
      }, duration);
    })
      .then(() => {
        return fn(...args);
      })
      .catch((err) => {
        console.log("cancle");
      });

    return promise;

  }


}
export default myDecounce2;

//小结： 防抖 重在 “清零/重置”   ；  节流 重在 “加锁” 