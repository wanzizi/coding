// 发布-订阅模式
function PubSub() {
  this.list = {};
  //TODO:让新用户也能获取到之前的消息
}

PubSub.prototype.on = function(name, fn) {
  if (this.list[name] && this.list[name].length) {
    this.list[name].push(fn);
  } else {
    this.list[name] = [fn];
  }
};

PubSub.prototype.emit = function(name, args) {
  var _this = this;
  if (this.list[name]) {
    this.list[name].forEach(function(func) {
      func.call(_this, args);
    });
  }
};

//取消订阅写的太粗暴了，其实应该是取消某一个key中的某一个方法，而不是直接把整个队列删除
// PubSub.prototype.delete = function(name) {
//   delete this.list[name];
// };
PubSub.prototype.delete = function(name, func) {
  console.log(this.list[name]);
  if (this.list[name] && this.list[name].length) {
    var index = this.list[name].findIndex(function(item) {
      return item === func;
    });
    console.log(this.list[name], index);
    this.list[name].splice(index, 1);
  }
};

var pubsub = new PubSub();
var func = function(word) {
  console.log(word + ",world1");
};
pubsub.on("listen", func);
pubsub.on("listen", function(word) {
  console.log(word + ",world2");
});
pubsub.on("listen", function(word) {
  console.log(word + ",world3");
});
pubsub.emit("listen", "hello");

// addEventListener是一种很典型的发布-订阅模式

pubsub.delete("listen", func);
