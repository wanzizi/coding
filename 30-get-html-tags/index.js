/**
 * 获取页面所有html的tagname
 */
// 获取当前页面中所有 HTML tag 的 名字，以数组形式输出, 重复的标签不重复输出
function getAllHTMLTags() {
  return [].slice
    .call(document.querySelectorAll("*"))
    .reduce(function(arr, item) {
      // console.log(item);
      if (arr.indexOf(item.tagName) === -1) {
        arr.push(item.tagName);
      }
      return arr;
    }, []);
}
getAllHTMLTags();

// 降序输出，就加个reverse吧
