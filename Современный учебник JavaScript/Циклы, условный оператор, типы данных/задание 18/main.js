function pow(a, b){
    let repA = a;
    for(let i = 1; i < b; ++i){
        a *= repA;
    }
    return a;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
}else {
    alert( pow(x, n) );
}