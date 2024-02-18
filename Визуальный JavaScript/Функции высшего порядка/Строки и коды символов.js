const SCRIPTS = require("./scripts"); //Набор данных
"Одно из применений набора данных - определить, символами какой системы письма набран заданный фрагмент текста."

"Вспомним, что для каждой системы существует массив диапазонов кодов символов."
"Поэтому, зная код символа, мы бы могли использоватьб следующую функцию, чтобы найти соответствующую систему."

function characterScript(code){
    for(let script of SCRIPTS){
        if(script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })){
            return script;
        }
    }
    return null;
}

console.log(characterScript(121));

"Метод some - это ещё одна функция высшего порядка."
"Метод массива some() позволяет узнать, есть ли в массиве хотя бы один элемент, "
"удовлетворяющий условию в функции-колбэке. "
"Колбэк-функция будет вызываться для каждого элемента массива до тех пор, пока не вернётся true, "
"либо пока не закончатся элементы массива."
"Результатом вызова метода some() будет boolean-значение true или false."
"Если ни один элемент в массиве не удовлетворит условию, то результат будет false."


"Метод JavaScript charCodeAt возвращает не полный код символа, а кодовую единицу."
console.log("A".charCodeAt()); //65
"Метод charCodeAt() возвращает целое число от 0 до 65535, представляющее кодовую единицу UTF-16 с заданным индексом."


"Метод codePointAt возвращает полный символ Unicode."
console.log("A".codePointAt()); //65


"Метод charCodeAt() возвращает целое число от 0 до 65535, представляющее кодовую единицу UTF-16 по данному индексу."

"Кодовая единица UTF-16 соответствует кодовой точке Unicode для кодовых точек, "
"которые могут быть представлены в одной кодовой единице UTF-16. "
"Если кодовая точка Юникода не может быть представлена в одной кодовой единице UTF-16 (поскольку ее значение больше 0xFFFF), "
"то возвращаемая кодовая единица будет первой частью суррогатной пары для кодовой точки. "
"Если вам нужно все значение кодовой точки, "
"используйте codePointAt()."