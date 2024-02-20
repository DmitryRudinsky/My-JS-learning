"Дана строка. Удалите предпоследний символ из этой строки."

function deletePenultimate(string){
    return string.slice(0, string.length - 2) + string.slice(string.length - 1);
}

console.log(deletePenultimate("КтоЯ?")); //Кто?
console.log(deletePenultimate("АБВГД")); //АБВД
console.log(deletePenultimate("ЧТО ПРОИСХОДИТ?")); //ЧТО ПРОИСХОДИ?
console.log(deletePenultimate("Ненавижу тебя")); //Ненавижу тея
console.log(deletePenultimate("Или себя")); //Или сея