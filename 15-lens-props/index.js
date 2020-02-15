// 给定一个字符串， 比如lensProp('a', obj) 返回 'obj.a'的值
/**
 *
 * @param {*} str 字符串
 * @param {*} obj 需解析的对象
 */
function lensProp(str, obj) {
  var arr = str.split(".");
  var index = 0;
  var curObj = obj;
  while (index < arr.length && curObj) {
    curObj = curObj[arr[index]] || undefined;
    index++;
  }
  return curObj;
}

const a = lensProp("a", { a: 1 }); // 1
const b = lensProp("b", { a: 1 }); // undefined
const c = lensProp("a.b", { a: { b: "c" } }); // c
const d = lensProp("a.b.c.d.e.f", { a: { b: "c" } }); // undefined
