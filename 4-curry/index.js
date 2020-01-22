// 柯里化是函数式编程
// 可以一直复用某个函数，将函数拆分，一部分先执行，一部分由返回出去的函数继续执行
// 参数收集，并在收集完毕之后执行所有参数的一个过程，有延时执行的效果

function myCurry(fn, args) {
  // function.length代表形参的个数
  // arguments.length代表函数被调用时实际传参的个数

  // 实现的效果，第一次调用只是赋值，之后才是传参，args是为之后循环调用准备的参数
  var _args = args || [];
  return function() {
    _args = _args.concat([].slice.call(arguments));
    if (_args.length < fn.length) {
      return myCurry.call(this, fn, _args);
    }
    return fn.apply(this, _args);
  };
}
