// 用栈实现队列
// 用“先进后出”来实现“先进先出”

function queueByStack(list) {
  this.list = list || [];
}

queueByStack.prototype.push = function(item) {
  this.list.push(item);
};
queueByStack.prototype.pop = function() {
  return this.list.shift();
};
queueByStack.prototype.empty = function() {
  return this.list.length;
};
