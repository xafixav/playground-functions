var re = /-/g;
var str = '2016-01-01';
var newstr = re[Symbol.replace](str, '.');
console.log(newstr);  // 2016.01.01