// 1 задание

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor(styles.length / 2)] = "Классика";
let del = styles.shift();
alert(del);
styles.unshift("Рэп, Регги");

// 2 задание

function SumInput() {
    let array = [];
    let sm = 0;
    let num = 0;
    while(true){
        num = +prompt("Введите число", "");
        if (num == null || num == "" || !isFinite(num)) break;
        array.push(num);
    }
    for(elem of array){
        sm += elem;
    }
    alert(sm);
}

SumInput();

//3 задание

function getMaxSubSum(arr){
    arr.push(0);
    mx = 0;
    for (let i = 0; i < arr.length; ++i){
        let cnt = arr[i];
        for (let j = i + 1; j < arr.length; ++j){
            cnt += arr[j];
            if (cnt > mx){
                mx = cnt;
            }
        }
    }
    return mx;
} 

//другое решение

function getMaxSubSum2(arr){
    let mxSum = 0;
    let currentSum = 0;
    for(elem of arr){
        currentSum += elem;
        mxSum = Math.max(mxSum, currentSum);
        if (currentSum < 0) currentSum = 0;
    }
    return mxSum
}

alert(getMaxSubSum2([-2, -1, 1, 2]))