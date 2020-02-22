/**
 * 周期执行函数
 * @param {*} fn
 * @param {*} times 次数
 * @param {*} timing 间隔时间
 * @param {*} immediate 是否立即执行
 */
function repeatFn(fn, times, timing, immediate) {
  var count = 0;
  var interval = null;
  var _this = this;

  return function() {
    var args = [].slice.call(arguments);
    if (immediate) {
      fn.apply(_this, args);
      count++;
    }
    interval = setInterval(function() {
      fn.apply(_this, args);
      count++;
      if (count >= times) {
        clearInterval(interval);
      }
    }, timing);
  };
}

const repeatFunc = repeatFn(console.log, 4, 1000, true);
repeatFunc("hellworld");
