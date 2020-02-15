//用reduce实现map

Array.prototype.mapByReduce = function(fn) {
  var _this = this;
  return this.reduce(function(arr, item, index) {
    arr.push(fn(item, index, _this));
    return arr;
  }, []);
};

[1, 2, 3].mapByReduce(function(item, index) {
  return item * 3;
});
