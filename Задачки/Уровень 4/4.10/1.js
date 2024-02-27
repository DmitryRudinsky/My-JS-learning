console.log("А".charCodeAt(0)); //1040
console.log("Я".charCodeAt(0)); //1071

console.log("A".charCodeAt(0)); //65
console.log("Z".charCodeAt(0)); //90


function checkAlphabet(str){
    if(str.charCodeAt(0) >= 1040 && str.charCodeAt(0) <= 1071) return "Кириллица";
    else if(str.charCodeAt(0) >= 65 && str.charCodeAt(0) <= 90) return "Латынь";
}

console.log(checkAlphabet("Й")); //Кириллица
console.log(checkAlphabet("G")); //Латынь