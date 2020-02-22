// 手写promise
//问题： 回调一开始没写出来，then中的回调没想到存储下来在resolve，reject中用
function MyPromise(fn) {
  // pending,fullfilled,rejected
  this.status = "pending";
  this.params = null;
  this.handlers = [];
  this.handleErrors = [];
  var _this = this;

  function resolve(params) {
    _this.status = "fullfilled";
    var params = params;
    _this.handlers.forEach(function(cb) {
      params = cb(params);
    });
  }
  function reject(params) {
    _this.status = "rejected";
    var params = params;
    _this.handleErrors.forEach(function(cb) {
      params = cb(params);
    });
  }

  //固定this指向
  fn.call(this, resolve, reject);
}

// 增加，因为then可以链式调用，所有不能用一个方法来存，要用数组来存
//TODO:then有两个参数，正确，失败
MyPromise.prototype.then = function(fn) {
  if ((this.status = "fullfilled")) {
    this.handlers.push(fn);
  }
  return this;
};
MyPromise.prototype.catch = function(fn) {
  if ((this.status = "rejected")) {
    this.handleErrors.push(fn);
  }
  return this;
};
// TODO:finally的实现
// MyPromise.prototype.finally = function(fn) {
// return this.then(
//   function(data) {
//     callback();
//     return data;
//   },
//   function(reason) {
//     callback();
//     throw reason;
//   }
// );
// };
MyPromise.all = function(arr) {
  var results = [];
  return new MyPromise(function(resolve, reject) {
    var i = 0;
    next();
    function next() {
      arr[i].then(function(res) {
        results.push(res);
        i++;
        if (i === arr.length) {
          resolve(results);
        } else {
          // 执行完一个再执行下一个
          next();
        }
      });
    }
  });
};

MyPromise.race = function(arr) {
  return new MyPromise(function(resolve, reject) {
    arr.forEach(function(promise, index) {
      promise.then(resolve, reject);
    });
  });
};

var p = new MyPromise(function(resolve, reject) {
  setTimeout(function() {
    resolve(1);
  }, 1000);
});
p.then(function(res) {
  console.log("success", res);
  return 2;
})
  .then(function(res) {
    console.log("sucess1", res);
  })
  .catch(function(res) {
    console.log("error", res);
  });

var allP = new MyPromise.all([
  setTimeout(function() {
    console.log(1);
  }, 1000),
  setTimeout(function() {
    console.log(2);
  }, 2000)
]);
