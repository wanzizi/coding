/**
 * 继承方法
 * @param {*} A 被继承的函数
 * @param {*} B 继承的函数
 */
// 继承是通过原型链完成的，构造函数中的东西好像是不继承的
function Extend(A, B) {
  if (!A) {
    return;
  }
  //自己写的
  // var construct = B.construct;
  // A.call(B);
  // B.prototype = A.prototype;
  // B.construct = construct;
  var f = function() {};
  f.prototype = A.prototype;
  B.prototype = new f();
  B.prototype.constructor = B;
}

function Afn(name, age) {
  this.name = name;
  this.age = age;
}
Afn.prototype.say = function() {
  console.log("my name is " + this.name + ",i'm " + this.age + " years old");
};

function Bfn(name, age) {
  this.name = name;
  this.age = age;
}

Extend(Afn, Bfn);

// 子构造函数内部继承父构造函数
function Parent() {
  this.name = "parent";
  this.age = 50;
  this.sex = "man";
}
Parent.prototype.say = function() {
  console.log(
    "my name is " +
      this.name +
      ",i'm " +
      this.age +
      " years old,im a " +
      this.sex
  );
};

function Child() {
  Parent.call(this);
  this.name = "child";
  this.age = 20;
}
// Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
