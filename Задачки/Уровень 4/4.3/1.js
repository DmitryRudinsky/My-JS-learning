"Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли."


function delDoubles(array){
    return array.filter((elem, index) => array.indexOf(elem) == index);
}

console.log(delDoubles(['A', 'B', 'A', 'C', 'B']));