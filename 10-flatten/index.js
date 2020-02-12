/**
 * 拍平数组
 * @param {*} list
 * @param {*} deep 需要拍平到第几层（不知道这种理解是否正确，题目没有讲的很明确）
 */
function flatten(list, deep, nowDeep) {
  var flag = nowDeep || 1;
  if (!(list && list.length)) {
    return [];
  }
  return list.reduce(function(arr, item) {
    if (Object.prototype.toString.call(item) === "[object Array]") {
      if (flag >= deep) {
        arr = arr.concat(item);
      } else {
        arr = arr.concat(flatten(item, deep, flag + 1));
      }
    } else {
      arr.push(item);
    }
    return arr;
  }, []);
}
