// 手写bind

// 第一版
Function.prototype.myBind = function(context) {
  if (typeof this !== "function") {
    console.error("请用函数来调用该方法");
    return;
  }
  var _this = this;
  var args = [].slice.call(arguments, 1);
  var fnBound = function() {
    //apply的返回值是函数的处理结果
    //忘记把结果return出去，所以第一次写完绑定函数的值没有返回出来，只有console有用
    var newThis = this instanceof _this ? this : context;
    return _this.apply(newThis, args.concat([].slice.call(arguments)));
  };
  if (this.prototype) {
    fnBound.prototype = this.prototype;
  }
  return fnBound;
};

// 当绑定函数直接连接原函数的原型的时候，如果 fBound 的原型有修改时，
// 会对原函数的原型造成影响。所以，为了解决这个问题，我们需要一个空函数，作为中间人。

// 第二版
Function.prototype.myBind = function(context) {
  var _this = this;
  var args = [].shift(arguments);
  var midware = function() {};
  var fnBound = function() {
    var newThis = this instanceof _this ? this : context;
    return _this.apply(newThis, args.concat([].slice(arguments)));
  };

  midware.prototype = this.prototype;
  fnBound.prototype = new midware();

  return fnBound;
};
