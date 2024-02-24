"Дан массив со числами. Проверьте, что в нем есть число, содержащее в себе цифру 3."

let a = [1, 2, 30, 4, 5, 15, 20, 345, 900, 32, 14, 760, 555, 1000, 43, 556, 76, 80];

console.log(a.some(num => {
    return String(num).includes("3");
})); //true

console.log(a.some(num => {
    return String(num).includes("%");
})); //false