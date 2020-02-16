// 最长公共子序列
// 序列是离散的按顺序的字符集合，子串是连续的子字符串

// 现有例子全部通过了，但不知道是否有漏掉的情况
function longestCommonSequence(str1, str2) {
  if (!str1 || !str2) {
    return "";
  }

  return str1.split("").reduce(function(acc, item) {
    var hasWord = str2.indexOf(item);
    if (hasWord > -1) {
      str2 = str2.slice(hasWord + 1);
      acc += item;
    }
    return acc;
  }, "");

  // var subStr = "";
  // for (var i = 0; i < str1.length; i++) {
  //   var hasWord = str2.indexOf(str1[i]);
  //   if (hasWord > -1) {
  //     str2 = str2.slice(hasWord + 1);
  //     subStr += str1[i];
  //   }
  // }
  // return subStr;
}

longestCommonSequence("fosh", "fish");
longestCommonSequence("fish", "hish");
longestCommonSequence("lucider", "lucifer");
longestCommonSequence("hahaui", "hfui");
longestCommonSequence("sasa", "fgdfrsa");

// 最长公共子串
// 时间复杂度好像有点高
// 现有例子全部通过了，但不知道是否有漏掉的情况
function longestCommonSubstring(str1, str2) {
  if (!str1 || !str2) {
    return "";
  }
  var subStr = [];
  var index = 0;
  while (index < str1.length) {
    var hasWord = str2.indexOf(str1[index]);
    if (hasWord > -1) {
      for (var i = index; i < str1.length; i++) {
        if (hasWord < str2.length) {
          if (str1[i] === str2[hasWord]) {
            if (subStr.length) {
              subStr[subStr.length - 1] = subStr[subStr.length - 1] + str1[i];
            } else {
              subStr.push(str1[i]);
            }
            hasWord++;
          } else {
            subStr.push("");
            break;
          }
        } else {
          subStr.push("");
          break;
        }
      }
      subStr.push("");
    }
    index++;
  }

  if (subStr.length) {
    return subStr.reduce(function(max, item) {
      return item.length > max.length ? item : max;
    }, "");
  } else {
    return "";
  }
}

longestCommonSubstring("hish", "fish");
longestCommonSubstring("fish", "hish");
longestCommonSubstring("lucider", "lucifer");
longestCommonSubstring("sasa", "fgdfrsa");
longestCommonSubstring("hulatang", "ata");
