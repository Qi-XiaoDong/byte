function question1(num) {
  if (num > 5 ||num < 1) {
    return "请输入1-5之间的数字"
  }
  /**最终返回的字符串 */
  var str = "";
  /**每次循环要渲染*号的索引 */
  var target = "";
  for (var i = 1; i <= num; i++) {
    n = Math.abs(i - 3);
    target = isNeed(n);
    for (var j = 1; j <= 5; j++) {
      if (target.indexOf(j) > -1) {
        str += "*";
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  console.log(str)
  return str;
/**
 * 辅助函数，判断为*的索引
 * @param {*} num 
 */
  function isNeed(num) {
    if (num === 2) {
      return '3';
    }
    if (num === 1) {
      return '234';
    }
    if (num === 0) {
      return '12345';
    }
  }
}
