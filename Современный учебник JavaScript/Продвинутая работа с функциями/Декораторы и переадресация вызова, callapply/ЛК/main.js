// Прозрачное кеширование

// Представим, что у нас есть функция slow(x) , выполняющая ресурсоёмкие вычисления,
// но возвращающая стабильные результаты. Другими словами, для одного и того же x она
// всегда возвращает один и тот же результат.
// Если функция вызывается часто, то, вероятно, мы захотим кешировать (запоминать)
// возвращаемые ею результаты, чтобы сэкономить время на повторных вычислениях.
// Вместо того, чтобы усложнять slow(x) дополнительной функциональностью, мы
// заключим её в функцию-обёртку – «wrapper» (от англ. «wrap» – обёртывать), которая
// добавит кеширование. Далее мы увидим, что в таком подходе масса преимуществ.
// Вот код с объяснениями:


function slow(x){
    //какие-то сложные вычисления;
    return x;
}

function cachingDecorator(func){
    let cashe = new Map();
    return function(x){
        if (cashe.has(x)){
        return cashe.get(x);
    }
    let result = func(x);
    cashe.set(x, result);
    return result;
    }
}

slow = cachingDecorator(slow);

alert( slow(1) ); // slow(1) кешируем
alert( "Again: " + slow(1) ); // возвращаем из кеша
alert( slow(2) ); // slow(2) кешируем
alert( "Again: " + slow(2) ); // возвращаем из кеша


// Отделяя кеширующий код от основного кода, мы также сохраняем чистоту и простоту
// последнего.
// Результат вызова cachingDecorator(func) является «обёрткой», т.е. function(x)
// «оборачивает» вызов func(x) в кеширующую логику:

// С точки зрения внешнего кода, обёрнутая функция slow по-прежнему делает то же самое.
// Обёртка всего лишь добавляет к её поведению аспект кеширования.



// Применение «func.call» для передачи контекста.
// Упомянутый выше кеширующий декоратор не подходит для работы с методами объектов.

// Существует специальный встроенный метод функции func.call(context, …args)  , который
// позволяет вызывать функцию, явно устанавливая this .

// Теперь давайте сделаем cachingDecorator ещё более универсальным. До сих пор он
// работал только с функциями с одним аргументом.


let worker = {
    slow(min, max) {
        alert(`Called with ${min},${max}`);
        return min + max;
    }
};

function cachingDecorator(func, hash) {
    let cache = new Map();
    return function() {
        let key = hash(arguments); 
        if (cache.has(key)) {
            return cache.get(key);
        }
        let result = func.call(this, ...arguments); 
        cache.set(key, result);
        return result;
    };
}
function hash(args) {
    return args[0] + ',' + args[1];
}
worker.slow = cachingDecorator(worker.slow, hash);
alert( worker.slow(3, 5) ); // работает
alert( "Again " + worker.slow(3, 5) ); // аналогично (из кеша)

// Вместо func.call(this, ...arguments) мы могли бы написать func.apply(this,arguments) 

// Он выполняет func , устанавливая this=context и принимая в качестве списка
// аргументов псевдомассив args .
// Единственная разница в синтаксисе между call и apply состоит в том, что call
// ожидает список аргументов, в то время как apply принимает псевдомассив.

function hash2(arguments) {
    alert( [].join.call(arguments) ); // 1,2
}
hash2(1, 2);