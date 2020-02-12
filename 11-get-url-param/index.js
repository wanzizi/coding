// 给定一个url和一个key，查找key是否在url的查询字符串中， 如果在就返回，如果不在返回null，如果存在多个就返回数组。
function getUrlParams(url, key) {
  if (!(url && url.length)) {
    return null;
  }
  if (url.indexOf(key + "=") > -1) {
    var val = [];
    var param = url.split("?");
    if (param && param.length > 1) {
      param[1].split("&").forEach(function(item) {
        if (item.indexOf(key) > -1) {
          val.push(item.split("=")[1]);
        }
      });
    }
    return val.length > 1 ? val : val.join();
  } else {
    return null;
  }
}
