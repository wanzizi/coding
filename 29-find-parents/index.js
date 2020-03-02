// 已知数据格式，实现一个函数 fn 找出链条中所有的父级 id
const list = [
  {
    id: "1",
    name: "test1",
    children: [
      {
        id: "11",
        name: "test11",
        children: [
          {
            id: "111",
            name: "test111"
          },
          {
            id: "112",
            name: "test112"
          }
        ]
      },
      {
        id: "12",
        name: "test12",
        children: [
          {
            id: "121",
            name: "test121"
          },
          {
            id: "122",
            name: "test122"
          }
        ]
      }
    ]
  }
];
const id = "112";

function findParents(id, list) {
  var arr = [];

  fn(list);

  function fn(_list) {
    var flag = false;
    _list.forEach(function(item) {
      if (item.id === id) {
        flag = true;
        arr.push(id);
      } else if (item.children && item.children.length) {
        var obj = fn(item.children);
        if (obj.isThisChian) {
          flag = obj.isThisChian;
          arr.push(item.id);
        }
      }
    });

    return {
      isThisChian: flag,
      _list
    };
  }
  return arr.reverse();
}

findParents(id, list); // 输出 [1， 11， 112]
