let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
    
let sum = 0;

for(let cash in salaries){
    sum += salaries[cash];
}

alert(sum);