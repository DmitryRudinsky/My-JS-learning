"Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива."

function randomArrayElem(arr){
    let max = arr.length, min = 0;
    let indx = Math.floor(Math.random() * (max - min) + min);
    return arr[indx];
}

console.log(randomArrayElem(["Скажи-ка, дядя", "ведь не даром", "Москва, спалённая пожаром", "французу отдана"]));

