function solution(str1, str2) {
  const str = str2;
  return str.includes(str1) ? 1 : 0;
}

let str1 = "abc";
let str2 = "aabcc";

console.log(solution(str1, str2));

str1 = "tbt";
str2 = "tbbttb";

console.log(solution(str1, str2));
