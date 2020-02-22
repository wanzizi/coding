// 从一个无序，不相等的数组中，选取N个数，使其和为M实现算法
// 这个算法有很多扩展，比如电商中购物车中的计算，满100减20，不满100会在热销商品中进行推荐填充。

// 实现的比较糟糕
// 核心模块没有理解
// TODO:待进一步理解
function search(list, sum, count, tolerance) {
  if (!(list && list.length)) {
    return;
  }

  var totalLists = getLists(list, count);
  var result = [];

  for (var index = 0; index < totalLists.length; index++) {
    // console.log("index", index);
    (function(index) {
      var thisSum = totalLists[index].reduce(function(acc, item, ii) {
        // console.log(acc, item, ii, list[ii]);
        // console.log(acc + (item === 0 ? 0 : list[ii]));
        return acc + (item === 0 ? 0 : list[ii]);
      }, 0);
      // console.log(thisSum + "---");
      if (sum - thisSum >= 0 && sum - thisSum <= tolerance) {
        result.push(
          totalLists[index].reduce(function(acc, item, ii) {
            if (item !== 0) {
              acc.push(list[ii]);
            }
            return acc;
          }, [])
        );
      }
    })(index);
  }
  return result;

  function getLists(list, count) {
    // 用于遍历的数组
    var useArr = [];
    // 位置的标记
    var leftFlag = 0;
    // 最终所有的集合
    var resultArr = [];
    var isEnd = false;

    for (var i = 0; i < list.length; i++) {
      useArr.push(i < count ? 1 : 0);
    }
    resultArr.push(useArr.concat());

    while (!isEnd) {
      leftFlag = 0;
      for (var i = 0; i < useArr.length - 1; i++) {
        if (useArr[i] === 1 && useArr[i + 1] === 0) {
          // console.log(useArr.concat());
          for (var j = 0; j < i; j++) {
            // console.log("i", i, "j", j, "leftFlag", leftFlag);
            useArr[j] = j < leftFlag ? 1 : 0;
          }
          useArr[i] = 0;
          useArr[i + 1] = 1;
          resultArr.push(useArr.concat());
          if (
            useArr
              .slice(-count)
              .join("")
              .indexOf("0") === -1
          ) {
            isEnd = true;
          }
          break;
        }
        // console.log(JSON.stringify(useArr));
        useArr[i] === 1 && leftFlag++;
      }
    }
    return resultArr;
  }
}
