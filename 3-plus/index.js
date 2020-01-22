//实现加法
function addNum(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    if (a === 0 || b === 0) {
      return a || b;
    }
    var temp;
    while (b != 0) {
      // 取各位相加的值，不要进位
      // 二进制每位相加就相当于各位做异或操作^
      // 二进制数的异或操作是2个数对应位只有一个为 1，则在该位返回 1，其它均返回 0，所以异或的结果正是我们想要的各位相加不算进位的值
      temp = a ^ b;
      // 计算进位值，用到 &按位与 和 左移位运算符来计算进位值
      // & 运算符：2 个数对应位都是1，则在该位返回 1；
      // << 运算符：将数往左移动一位；
      b = (a & b) << 1;
      a = temp;
    }
    return a;
  } else {
    return;
  }
}

// 大概是这个意思
// addNum(639,872)
// 1+10+00+100+400+1000

// http://zouyang1230.com/blog/archives/805
