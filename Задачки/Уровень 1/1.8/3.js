"Дан массив с дробями:"
"[1.456, 2.125, 3.32, 4.1, 5.34]"
"Округлите эти дроби до одного знака в дробной части."

let array = [1.456, 2.125, 3.32, 4.1, 5.34];
let roundArray = array.map((num) => {
    return Math.round(num);
})
console.log(roundArray);

