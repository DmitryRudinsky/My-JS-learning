"Дан массив с числами. После каждого однозначного числа вставьте еще такое же."
let arr = [1, 2, 4, 45, 1230, 6544321, 143542, 43214, 2135, 2, 3, 49, 47183902, 90];
function pushNumber(array){
    array = array.map(a => String(a));
    for(let i = 0; i < array.length; i++){
        if(array[i].length == 1){
            array.splice(i, 0, array[i]);
            i++;
        }       
    }
    return array;
}

console.log(pushNumber(arr));