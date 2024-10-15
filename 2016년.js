function solution(a, b) {

    const date = new Date(2016, a-1, b);
    const dayNumber = date.getDay()
    
    const days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    
    return days[dayNumber];
}

console.log(solution(5,24));