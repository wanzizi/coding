// 简单的响应式

function MyTemplate(obj) {
  Object.keys(obj).forEach(function(attr) {
    var defaultVal = obj[attr];
    // console.log("defaultVal", defaultVal);
    if (Object.prototype.toString.call(obj[attr]) === "[object Object]") {
      obj[attr] = MyTemplate(obj[attr]);
    } else {
      Object.defineProperty(obj, attr, {
        get: function() {
          console.log("get", defaultVal);
          return defaultVal;
        },
        set: function(val) {
          defaultVal = val;
          console.log("set", defaultVal);
        }
      });
    }
  });
  // console.log(obj);
  return obj;
}

var obj = {
  a: 1,
  b: {
    c: 2
  }
};
MyTemplate(obj);
