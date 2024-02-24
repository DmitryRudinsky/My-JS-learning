"Дана строка со словами. Отсортируйте слова в алфавитном порядке."

let str = "FGhjhytndhrjXKNMYGUxhykhldjbDfgtHUKJXMLRKBVybiunOMBVCBRFHhhtHni";

console.log(str.split("").sort((a, b) => {
    if(a.toLowerCase() < b.toLowerCase()) return -1;
    else if(a.toLowerCase() > b.toLowerCase()) return 1;
    return 0;

}).join("")); //bBbBBCddDFfFGGghhhhhHHhhHiijjjJKkKKlLMMMnNnnOrRRtttUUuVVXxXyYyy0