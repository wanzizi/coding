// 函数的处理
function deepClone(obj) {
  var res;
  if (obj && typeof obj === "object") {
    // res = Object.prototype.toString.call(obj) === "[object Array]" ? [] : {};
    var constructor = obj.constructor;
    var res = new constructor();
    for (var key in obj) {
      if (obj[key] && typeof obj[key] === "object") {
        res[key] = deepClone(obj[key]);
      } else {
        res[key] = obj[key];
      }
    }
  } else {
    res = obj;
  }
  return res;
}
