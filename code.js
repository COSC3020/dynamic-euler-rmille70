
function e(n) {
    if(n === 0) return 1;
    let sum = 1.0;
    let fact = 1.0
    for(let i = 1; i <= n; i++){
        sum += 1.0 / (fact *= i);
    }
    return sum;
}

