/*
 * @Author: ganlan
 * @Date: 2021-06-05 14:51:42
 * @Description: 
 */

//TODO:自己实现一遍
function objectFactory() {

  var obj = new Object(),

  Constructor = [].shift.call(arguments);

  obj.__proto__ = Constructor.prototype;

  var ret = Constructor.apply(obj, arguments);

  return typeof ret === 'object' ? ret : obj;

};