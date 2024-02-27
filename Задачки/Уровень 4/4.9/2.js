"Сделайте функцию, которая параметром будет принимать массив чисел и возвращать массив общих делителей всех чисел из переданного массива."

function arrayOfDivs(n){
    let arrOfDivs = [];
    for(let i = 1; i * i < n; i++){
        if (n % i == 0){
            arrOfDivs.push(i);
            if(n / i != i) arrOfDivs.push(n / i);
        }
    }
    return arrOfDivs.sort((a, b) => a - b);
}

function count(array, n){
    let cnt = 0;
    for(let elem of array){
        if(elem == n) cnt += 1;
    }
    return cnt;
}

function arrOfMutualDivs(array){
    let newArr = [];
    for(let elem of array){
        let divsOfElem = arrayOfDivs(elem);
        divsOfElem.forEach(element => {
            newArr.push(element);
        });
    }
    let divArr = new Set();
    for(let i = 0; i < newArr.length; i++){
        if (count(newArr, newArr[i]) == array.length){
            divArr.add(newArr[i]);
        }
    }
    return [...divArr];
}

console.log(arrOfMutualDivs([44, 110])); //[ 1, 2, 3, 6, 9, 18 ]