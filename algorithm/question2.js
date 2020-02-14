
function question2 (str) {
  if (typeof str !== 'string'){
    console.log('输入内容错误，请输入格式为 Fred:Corwill;Wilfred:Corwill 的字符串')
    return ;
  }
  str = upCase(str);
  // 拆分字符
  arr = str.split(';')
  for (var i = 0; i < arr.length; i++ ) {
    arr[i] = arr[i].split(':');
  }

  arr = sort (arr);
  console.log(getStr(arr));
  return getStr(arr);

/** 辅助函数
 * 转换为大写 */
  function upCase (str) {
    str = str.toUpperCase();
    return str;
  }

/** 
 * 辅助函数
 *  最终获得的字符
*/
  function  getStr(arr) {
    var str = "";
    for (var i = 0; i <arr.length; i++) {
      str+= `(${arr[i][1]}, ${arr[i][0]}) `;
     }
     return str;
  }


/**辅助函数
 * 排序 */
  function sort (arr) {
    arr.sort(function (a, b) {
        var lastNameA = charCode(a[1]);
        var lastNameB = charCode(b[1]); 
        var firstNameA = charCode(a[0]);
        var firstNameB = charCode(b[0]); 
        if ( lastNameA !== lastNameB) {
          return lastNameA - lastNameB;
        }else {
          return firstNameA - firstNameB
        }
      })
      return arr;
  }
 


/**辅助函数
 * 字符串编码 */
  function charCode (str) {
    return str.charCodeAt(0)
  }
}
