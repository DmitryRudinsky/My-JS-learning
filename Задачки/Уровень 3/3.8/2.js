"Дана строка в формате:"
'kebab-case'
"Преобразуйте ее в формат:"
'snake_case'

function kebabToSnake(str){
    return str.replace("-", "_");
}

console.log(kebabToSnake('kebab-case'));