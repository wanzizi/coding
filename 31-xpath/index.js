// 实现一个函数，生成某个DOM元素的xpath，主要包含两部分：标签层级和兄弟元素中的顺序
function xpath(node) {
  if (node === document.body) {
    return node.tagName;
  }

  var str = "";
  findTarget(document.body.children);

  function findTarget(children) {
    var flag = false;
    [].slice.call(children).forEach(function(item, index) {
      if (item === node) {
        str = ">" + item.tagName.toLowerCase() + "[" + index + "]";
        flag = true;
      } else if (item.children && item.children.length) {
        var obj = findTarget(item.children);
        if (obj.isChian) {
          flag = obj.isChian;
          str = ">" + item.tagName.toLowerCase() + "[" + index + "]" + str;
        }
      }
    });

    return {
      isChian: flag,
      children
    };
  }
  return "body" + str;
}

xpath(document.querySelector("#关键点"));

// 实例做法，可根据这个优化自己写的函数
// function helper(node, path) {
//   if (node === document.body) return `body ${path}`;

//   const i = Array.prototype.findIndex.call(node.parentNode.children, el => el === node)
//   return  helper(node.parentNode, `${path} > ${node.tagName.toLowerCase()}[${i}]`);
// }

// function XPath(node) {
//   return helper(node, '');
// }
