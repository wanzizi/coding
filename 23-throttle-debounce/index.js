// 节流
/**
 *
 * @param {*} fn
 * @param {*} timing 间隔一段时间触发一次，稀释频率
 */
function throttle(fn, timing) {
  var time = new Date().getTime();
  var _this = this;
  return function() {
    var nowTime = new Date().getTime();
    if (nowTime - time >= timing) {
      fn.apply(_this);
      time = nowTime;
    }
  };
}
window.onresize = throttle(function() {
  console.log(1);
}, 100);

// 防抖
/**
 *
 * @param {*} fn
 * @param {*} timing 间隔时间内只触发最后一次
 */
function debounce(fn, timing) {
  var time = new Date().getTime();
  var _this = this;
  var settime = null;
  return function() {
    var nowTime = new Date().getTime();
    if (nowTime - time) {
      clearTimeout(settime);
    }
    settime = setTimeout(function() {
      fn.apply(_this);
      time = nowTime;
    }, timing);
  };
}

// 不用计时，有就清除调重新settimeout
// function debounce(fn,delay){
//   let timer = null //借助闭包
//   return function() {
//       if(timer){
//           clearTimeout(timer) //进入该分支语句，说明当前正在一个计时过程中，并且又触发了相同事件。所以要取消当前的计时，重新开始计时
//           timer = setTimeOut(fn,delay)
//       }else{
//           timer = setTimeOut(fn,delay) // 进入该分支说明当前并没有在计时，那么就开始一个计时
//       }
//   }
// }

window.onresize = debounce(function() {
  console.log(2);
}, 100);
