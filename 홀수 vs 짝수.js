function solution(num_list) {
    // let odd = 0
    // let even = 0
    // for(let i = 0; i < num_list.length; i +=2){
    //     odd +=num_list[i]
    // }
    // for(let i = 1; i < num_list.length; i +=2){
    //     even +=num_list[i]
    // }
    
    const even = num_list.reduce((a, c, i) => {
        if(i%2===0) return a+c;
        else return a;
    }, 0);
    
    const odd = num_list.reduce((a,c,i)=>{
        if(i%2!==0) return a+c;
        else return a;
    },0);
    // console.log(even, odd)
    return Math.max(even, odd);
}

console.log(solution([1,2,3,4,5]));
console.log(solution([2,4,14,2,1]));