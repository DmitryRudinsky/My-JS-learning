"Дана строка в формате:"
'snake_case'
"Преобразуйте ее в формат:"
'camelCase'

function snakeToCamel(str){
    str = str.split("_");
    for(let i = 1; i < str.length; i++){
        str[i] = str[i][0].toUpperCase() + str[i].slice(1);
    }
    return str.join("");
}

console.log(snakeToCamel('snake_case'));