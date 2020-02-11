//有一条马路，马路上有很多树，树的高度不一。
// 现在要统一剪树，剪到高度为 h。 意思就是，比 h 高的树都剪到 h，比 h 低的树高度不变。
// 所有的树剪掉的总长度为 C。 现在要使 C>某个值的情况下(假设为 maxLen，且大于的范围在range内)，使 h 最大。问怎么确定 h。

function cutTree(list, maxLen, range) {
  // 条件没判断
  if (!list.length) {
    return 0;
  }
  var start = 0;
  var end = Math.max.apply(null, list);

  while (start <= end) {
    var res = 0;
    // 中间值没有/2
    var mid = start + Math.floor((end - start) / 2);
    for (var i = 0; i < list.length; i++) {
      if (list[i] > mid) {
        res += list[i] - mid;
      }
    }
    if (res > maxLen) {
      if (res - maxLen <= range) {
        return mid;
      }
      // 两个判断条件没写的，修改值没写对
      end = mid - range;
    } else {
      start = mid + range;
    }
  }

  return -1;
}

//感觉不是理解的很好，待复习
