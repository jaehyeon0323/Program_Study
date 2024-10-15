function solution(arr) {
    let minValue = arr[0];
    let minIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];
            minIndex = i;
        }
    }
    
    const answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (i !== minIndex) {
            answer.push(arr[i]);
        }
    }
    return answer.length > 0 ? answer : [-1];
}