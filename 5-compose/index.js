// 写死的参数
function my_compose(fn2, fn1) {
  if (fn1 && fn2) {
    return function(firstName, lastName) {
      return fn2(fn1(firstName, lastName));
    };
  }
}

// 不限制的参数，可以无限传参
// 但是返回的函数，参数有限制，只能传一个
function compose() {
  var fns = [].slice.call(arguments);
  return function(arg) {
    var res = arg;
    for (i = fns.length - 1; i > 0; i--) {
      res = fns[i](res);
    }
    return res;
  };
}
