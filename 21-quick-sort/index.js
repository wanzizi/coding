function quickSort(list) {
  if (!(list && list.length)) {
    return [];
  }
  if (list.length === 1) {
    return list;
  }
  var mid = Math.floor(list.length / 2);

  // 不去重的话
  // const pivot = array.splice(pivotIndex, 1)[0];  //从数组中取出我们的"基准"元素

  return quickSort(
    list.filter(function(item) {
      return item < list[mid];
    })
  ).concat(
    [list[mid]],
    quickSort(
      list.filter(function(item) {
        return item > list[mid];
      })
    )
  );
}

quickSort([1, 3, 2, 9, 6, 5, 1, 0, -2, 10]);
