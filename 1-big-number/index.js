// 大数相加
function bigNumber(num1, num2) {
  if (!num1 || !num2) {
    return 0;
  }

  var arr1 =
    num1 > num2
      ? num1
          .toString()
          .split("")
          .reverse()
      : num2
          .toString()
          .split("")
          .reverse();
  var arr2 =
    num1 > num2
      ? num2
          .toString()
          .split("")
          .reverse()
      : num1
          .toString()
          .split("")
          .reverse();
  var plus = 0;
  var sum = arr1.reduce(function(arr, el, index) {
    if (index <= arr2.length - 1) {
      var whole = +el + +arr2[index] + plus;

      if (whole >= 10) {
        plus = parseInt(whole / 10);
        arr.push(whole - 10);
      } else {
        plus = 0;
        arr.push(whole);
      }
    } else {
      arr.push(el);
    }
    return arr;
  }, []);
  if (plus > 0) {
    arr.push(plus);
  }
  return Number(sum.reverse().join("")) || 0;
}
