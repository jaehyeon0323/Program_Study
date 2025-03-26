// function solution(str1, str2) {
//   for(let i=0; i<str2.length; i++){
//     let subStr = '';

//     for(let j=i; j<i+str1.length; j++){
//       subStr += str2[j];
//     }

//     if(subStr===str1) return 1;
//     else subStr = '';
//   }
//   return 0;
// }

// substring, slice 동일한 동작수행, 차이는 음수.
// function solution(str1, str2) {
//   for(let i=0; i<str2.length; i++){
//     const subStr = str2.substring(i, i+str1.length);
//     if(subStr===str1) return 1;
//   }
//   return 0;
// }

// function solution(str1, str2) {
//   for(let i=0; i<str2.length; i++){
//     const subStr = str2.slice(i, i+str1.length);
//     if(subStr===str1) return 1;
//   }
//   return 0;
// }

// function solution(str1, str2) {
//   return str2.includes(str1) ? 1 : 0;
// }

떼기;

// function solution(n_str) {
//     let result = '';
//     let zero = false;
//     for(let i=0; i<n_str.length; i++){
//       const cur = n_str[i];
//       if(zero){
//         result += cur;
//       }else{
//         if(cur!=='0') zero = true;
//         cur==='0' ? result=result : result+=cur;
//       }
//     }

//     return result;
// }

// function solution(n_str) {
//   return n_str.replace(/^0+/, '');
// }
// 정규 표현식

function solution(n_str) {
  return Number(n_str).toString();
}

function solution(my_strings, parts) {
  let result = "";

  for (let i = 0; i < parts.length; i++) {
    const [s, e] = parts[i];
    result += my_strings[i].slice(s, e + 1);
  }

  return result;
}

function solution(my_strings, parts) {
  return my_strings.map((str, i) => str.slice(parts[i][0], parts[i][1] + 1)).join("");
}
