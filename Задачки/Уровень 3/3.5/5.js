"35142"
"Отсортируйте цифры этого числа. В нашем случае должно получится следующее:"
"12345"

function bubbleSort(str){
    str = String(str).split("").map(a => Number(a));
    for(let j = str.length - 1; j > 0; j--){
        for(let i = 0; i < j; i++){
            if(str[i] > str[i + 1]){
                let temp = str[i];
                str[i] = str[i + 1];
                str[i + 1] = temp;
            }
        }
    }
    return str.join("");
}
console.log(bubbleSort(35142)); //12345

function bubbleSortForArray(arr){
    for(let j = arr.length - 1; j > 0; j--){
        for(let i = 0; i < j; i++){
            if(arr[i] > arr[i + 1]){
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSortForArray([14, 6, 3, 66, 12, 4])); //[ 3, 4, 6, 12, 14, 66 ]


