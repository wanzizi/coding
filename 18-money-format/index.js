// 千分位展示
function moneyFormat(str) {
  if (!str) {
    return str;
  }
  var arr = str.split(".");
  var str = "";
  var reg = new RegExp("\\d{1,3}", "g");
  if (arr[0] && arr[0].length) {
    var s = arr[0]
      .split("")
      .reverse()
      .join("");
    var ma = s.match(reg);
    str += ma
      .join(",")
      .split("")
      .reverse()
      .join("");
  }
  if (arr[1] && arr[1].length) {
    var ma = arr[1].match(reg);
    str += "." + ma.join(",");
  }
  return str;
}

//number.toLocaleString()

// 千分位转普通数字
// 1,231，转化为1231
function numFormat(str) {
  return str.replace(/,/g, "");
}

// ¥1,231，转化为1231. 支持各种货币呢
function numFormat(str) {
  return str.replace(/[^\d\.]/g, "");
}
