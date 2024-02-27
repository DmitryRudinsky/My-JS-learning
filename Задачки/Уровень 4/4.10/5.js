"Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей, являющихся простыми числами."

function isPower(n){
    for(let i = 2; i <= Math.floor(Math.sqrt(n)); i++){
        if(n % i == 0){
            return false;
        }
    }
    return true;
}

function arrOfSimpDivs(n){
    let arr = [];
    for(let i = 1; i <= Math.floor(Math.sqrt(n)); i++){
        if(n % i == 0 && isPower(i)){
            arr.push(i);
            if(n / i != i) arr.push(n / i);
        }
    }
    return arr.sort((a, b) => a - b);
}

console.log(arrOfSimpDivs(676039));
/*
[
      1,     7,     13,
     17,    19,     23,
  29393, 35581,  39767,
  52003, 96577, 676039
]
*/