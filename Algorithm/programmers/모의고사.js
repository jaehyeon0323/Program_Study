function solution(answers){
  const patterns = [
      [1, 2, 3, 4, 5],
      [2, 1, 2, 3, 2, 4, 2, 5],
      [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
      ];
  
  const scores = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    for (let j = 0; j < patterns.length; j++) {
      if (answers[i] === patterns[j][i % patterns[j].length]) {
          scores[j]++;
    }
  }
}
  const maxScore = Math.max(...scores);

  const result = [];
  for (let i = 0; i < scores.length; i++) {
      if (scores[i] === maxScore) {
          result.push(i + 1);
      }
  }

return result
}

// 배열 중첩 구조에 대해 생각할 것
// 스코어 빈 배열이 필요하다는 것을 인지해야함
