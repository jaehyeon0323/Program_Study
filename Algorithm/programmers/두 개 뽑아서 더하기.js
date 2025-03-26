function solution(numbers){
  let count = 0;
  let sum = 0;

  for( let i = 0; i < numbers.length; i++){
    sum = count[i]+count[i+1]
    return sum;
  }
}