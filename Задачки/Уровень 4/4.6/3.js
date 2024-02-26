"Сделайте функцию, которая параметром будет принимать массив с числами и заменять каждое число на массив его делителей."

function subArrOfDivs(n){
    let arr = [];
    for(let i = 1; i < Math.floor(Math.sqrt(n)); i++){
        if(n % i == 0){
            arr.push(i);
            if(n / i != i) arr.push(n / i);
        }
    }
    return arr.sort((a, b) => a - b);
}

function arrayOfDivs(array){
    for(let i = 0; i < array.length; i++){
        array[i] = subArrOfDivs(array[i]);
    }
    return array;
}

console.log(arrayOfDivs([44, 12, 8, 24, 55, 80]));
/*
[
  [ 1, 2, 4, 11, 22, 44 ],
  [ 1, 2, 6, 12 ],
  [ 1, 8 ],
  [ 1, 2, 3, 8, 12, 24 ],
  [ 1, 5, 11, 55 ],
  [
     1,  2,  4,  5,
    16, 20, 40, 80
  ]
]
*/