/**
 * 判断一个字符串是否是另一个字符串的子序列
 * @param {*} subStr
 * @param {*} str
 */
// 要学会使用双指针
function isSequence(subStr, str) {
  if (!subStr || !str) {
    return false;
  }
  var slow = 0;
  for (var fast = 0; fast < str.length; fast++) {
    if (subStr[slow] === str[fast]) {
      slow++;
    }
  }
  return slow === subStr.length;
}

isSequence("apple", "axpfxplle");
