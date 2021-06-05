/*
 * @Author: ganlan
 * @Date: 2021-06-05 12:39:47
 * @Description:
 */

Function.prototype.myBind = function (target) {
  if (typeof this !== 'function') {
    console.error('expected a function')
    return
  }
  const context = this
  const args = Array.prototype.slice.call(arguments, 1)

  const fNOP = function () {}

  const fBound = function () {
    const otherArgs = Array.prototype.slice.call(arguments)
    return context.apply(
      this instanceof fBound ? this : target,
      args.concat(otherArgs)
    )
  }

  //如果直接使用fBound返回，那改动fBound的prototype就会改动到‘this’对应的函数，所以要做个空函数中转
  // fBound.prototype = this.prototype
  fNOP.prototype = this.prototype
  //把新构造出来的实例挂在fBound的原型链上
  fBound.prototype = new fNOP()

  return fBound
}

// selfFunc.myBind(this)
