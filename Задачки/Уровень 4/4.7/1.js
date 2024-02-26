"Сделайте функцию, которая параметром будет принимать текст со словами, а возвращать текст,"
"в котором эти слова будут отсортированы в алфавитном порядке."

function litSort(str){
    str = str.replace(/[.,!@#$%^&*();:]/g, "").split(" ");
    return str.sort((a, b) => {
        if (a.toLowerCase() < b.toLowerCase()) {
          return -1;
        }
        if (a.toLowerCase() > b.toLowerCase()) {
          return 1;
        }
        return 0;
    }).join(" ");
}

console.log(litSort("Подруга дней моих суровых, голубка дряхлая моя")); //голубка дней дряхлая моих моя Подруга суровых