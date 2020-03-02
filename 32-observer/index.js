// 观察者模式
function Subject() {
  this.subs = [];
}

Subject.prototype.add = function(sub) {
  this.subs.push(sub);
};
Subject.prototype.notify = function() {
  this.subs.forEach(function(sub) {
    sub.update();
  });
};

function Observer() {}
Observer.prototype.update = function() {
  console.log("update");
};

var sub = new Subject();
var ob = new Observer();
sub.add(ob);

sub.notify();

// 发布订阅模式只通过构造函数实现on和emit的通信
// 目标自己直接控制观察者
