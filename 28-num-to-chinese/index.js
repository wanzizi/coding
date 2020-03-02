// 数字转中文

function numToChinese(num) {
  if (!num || typeof num !== "number") {
    return num;
  }
  num = num.toString().split("");
  var units = ["十", "百", "千"];
  var moreUnits = ["万", "亿"];
  var nums = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
  var flag = 0;
  var flag1 = 0;
  var resultStr = "";

  var last = num.pop();
  while (last && flag1 <= moreUnits.length) {
    resultStr = (units[flag] || "") + nums[+last] + resultStr;

    flag++;
    if (flag > units.length) {
      resultStr = moreUnits[flag1] + resultStr;
      flag = 0;
      flag1++;
    }
    last = num.pop();
  }

  return resultStr.slice(1);
}

numToChinese(12345);
//TODO:对连续0的处理，这里没有优化
numToChinese(10002);
numToChinese(89797810002);
