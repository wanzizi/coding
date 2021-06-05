/*
 * @Author: ganlan
 * @Date: 2021-06-05 12:42:55
 * @Description:
 */
// 手写aplly

Function.prototype.myApply = function (content, arr) {
  let context = Object(content) || window

  context.fn = this

  if (!arr) {
    return content.fn()
  }

  let args = []
  for (let i = 0; i < arr.length; i++) {
    args.push('arr[' + i + ']')
  }
  const result = eval('context.fn(' + args.join() + ')')

  delete content.fn

  return result
}

// myFunc.apply(this, 1, 2, 3)
