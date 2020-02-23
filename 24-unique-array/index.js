// 尽可能多的了解数组去重方法
// 1. new Set
function uniqueArray(list) {
  if (!(list && list.length)) {
    return list;
  }
  return Array.from(new Set(list));
}

// 2.obj key去重
function uniqueArray(list) {
  if (!(list && list.length)) {
    return list;
  }
  var obj = {};
  var setedArr = [];
  list.forEach(function(item) {
    if (!obj[item]) {
      obj[item] = 1;
      setedArr.push(item);
    }
  });
  return setedArr;
}

// 3.sort之后相邻不等加入，但是这个只针对简单字符串或者数字吧，具体场景估计不会使用
// 快慢指针做法，一样先sort，快指针往前一步，慢指针是不重复的数组，一个个增加
function uniqueArray(list) {
  if (!(list && list.length)) {
    return list;
  }
  list.sort();
  var slowP = 0;
  for (var fastP = 0; fastP < list.length; fastP++) {
    if (list[slowP] !== list[fastP]) {
      slowP++;
      list[slowP] = list[fastP];
    }
  }
  return list.slice(0, slowP + 1);
}

// 4.使用indexOf

uniqueArray([1, 1, 2, 2, 3, 4]);
uniqueArray([1, 1, 6, 7, 9, 9, 8, 2, 2]);
uniqueArray(["a", "c", "b", "z", "A", "K", "d", "D", "a"]);
