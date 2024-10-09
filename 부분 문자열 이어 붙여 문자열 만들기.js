function solution(my_strings, parts) {
  let answer = "";

  for (let i = 0; i < my_strings.length; i++) {
      answer += my_strings[i].substring(parts[i][0], parts[i][1] + 1);
  }

  return answer;
}

let my_strings = ["progressive", "hamburger", "hammer", "ahocorasick"];
let parts = [[0, 4], [1, 2], [3, 5], [7, 7]];

console.log(solution(my_strings, parts));