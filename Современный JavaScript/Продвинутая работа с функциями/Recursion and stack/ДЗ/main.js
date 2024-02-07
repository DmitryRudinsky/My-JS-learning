//1 задание

//Цикл

function SumTo1(n){
    let sm = 0;
    for (let i = 1; i <= n; ++i){
        sm += i;
    }
    return sm;
}

//Рекурсия

function SumTo2(n){
    if (n == 1){
        return 1;
    }else{
        return n + SumTo2(n - 1);
    }
}

//Ариф.прогрессия 

function SumTo3(n){
    return (1 + n) / 2 * n;
}

alert(SumTo1(100));
alert(SumTo2(100));
alert(SumTo3(100));


// 2 задание

function factorial(n){
    if (n == 1){
        return 1;
    }else{
        return n * factorial(n - 1);
    }
}

alert(factorial(5));


// 3 задание


function fib(n){
    return n <= 2 ? 1 : fib(n - 1) + fib(n - 2);
}

alert(fib(7));


// 4 задание


let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

// Циклический способ

function printList1(list){
    let newList = list;
    while(newList){
        alert(newList.value);
        newList = newList.next;
    }
}

(printList1(list));


// Рекурсивный способ


function printList2(list){
    alert(list.value);
    if(list.next){
        printList2(list.next);
    }
}

printList2(list);


//5 задание


// рекурсия

function revPrintList1(list){
    let newList = list;
    if (newList.next){
        revPrintList1(newList.next);
    }
    alert(newList.value);
}

revPrintList1(list);

//цикл

function revPrintList2(list){
    let newList = list;
    let arr = [];
    while(newList){
        arr.push(newList.value);
        newList = newList.next;
    }
    for (let i = arr.length - 1; i >= 0; --i){
        alert(arr[i]);
    }
}

revPrintList2(list);
