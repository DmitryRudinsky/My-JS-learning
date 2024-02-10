// "1 упражнение"
// //1 вариант
// for(let i = 1; i <= 7; i++){
//     let str = '';
//     while (str.length != i){
//         str += "#";
//     }
//     console.log(str);
// }

// console.log("");

// //2 вариант
// let str = "";
// for(let i = 1; i <= 7; i++){
//     str += "#";
//     console.log(str);
// }


// "2 упражнение"

// for(let num = 1; num <= 100; num++){
//     if(num % 15 == 0){
//         console.log("FizzBuzz");
//     }else if(num % 5 == 0){
//         console.log("Buzz");
//     }else if(num % 3 == 0){
//         console.log("Fizz");
//     }else{
//         console.log(num);
//     }
// }

"3 упражнение"
let size = 8;
for(let i = 1; i < size + 1; i++){
    let string = "";
    for(let j = 1; j < size + 1; j++){
        if((i + j) % 2 == 0){
            string += " ";
        }else{
            string += "#";
        }
    }
    console.log(string);
}