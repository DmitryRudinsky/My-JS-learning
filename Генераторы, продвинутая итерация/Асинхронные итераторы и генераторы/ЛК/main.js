'Асинхронные итераторы позволяют перебирать данные, поступающие асинхронно.'
'Например, когда мы загружаем что-то по частям по сети. Асинхронные генераторы делают'
'такой перебор ещё удобнее.'
'Давайте сначала рассмотрим простой пример, чтобы понять синтаксис, а затем – реальный'
'практический.'

// Асинхронные итераторы

'Асинхронные итераторы похожи на обычные итераторы, но имеют некоторые'
'синтаксические отличия.'
'«Обычный» перебираемый объект, как подробно рассказано в главе Перебираемые'
'объекты, выглядит примерно так:'

let range = {
    from: 1,
    to: 5,

    [Symbol.iterator](){
        return{
            current: this.from,
            last: this.to,
            next(){
                if(this.current <= this.last){
                    return { done: false, value: this.current++ };
                }else{
                    return { done: true };
                }
            }
        };
    }
};

for(let value of range){
    console.log(value);
}

'Чтобы сделать объект итерируемым асинхронно:'
'1. Используется Symbol.asyncIterator вместо Symbol.iterator .'
'2. next() должен возвращать промис.'
'3. Чтобы перебрать такой объект, используется цикл for await (let item of'
'iterable) .'
'Давайте создадим итерируемый объект range , как и в предыдущем примере, но теперь'
'он будет возвращать значения асинхронно, по одному в секунду:'

let asyncRange = {
    from: 10,
    to: 15,
    [Symbol.asyncIterator](){
        return{
            current: this.from,
            last: this.to,
            async next(){
                await new Promise(resolve => setTimeout(resolve, 1000));
                if (this.current <= this.last){
                    return {done: false, value: this.current++};
                } else{
                    return {done: true};
                }
            }
        };
    }
};

(async () => {
    for await (let value of asyncRange){
        console.log(value);
    }
})()

'Как видим, структура похожа на обычные итераторы:'
'1. Чтобы сделать объект асинхронно итерируемым, он должен иметь метод'
'Symbol.asyncIterator (1) .'
'2. Этот метод должен возвращать объект с методом next() , который в свою очередь'
'возвращает промис (2) .'
'3. Метод next() не обязательно должен быть async , он может быть обычным методом,'
'возвращающим промис, но async позволяет использовать await , так что это удобно.'
'Здесь мы просто делаем паузу на одну секунду (3) .'
'4. Для итерации мы используем for await (let value of range) (4) , добавляя'
'«await» после «for». Он вызовет range[Symbol.asyncIterator]() один раз, а затем'
'его метод next() для получения значений.'


// Асинхронные генераторы

'Как мы уже знаем, в JavaScript есть генераторы, и они являются перебираемыми.'
'В обычных генераторах мы не можем использовать await . Все значения должны'
'поступать синхронно: в for..of нет места для задержки, это синхронная конструкция.'
'Но что если нам нужно использовать await в теле генератора? Для выполнения сетевых'
'запросов, например.'
'Нет проблем, просто добавьте в начале async , например, вот так:'

async function* generateSequence(start, end){
    for(let i = start; i <= end; i++){
        await new Promise(resolve => setTimeout(resolve, 1000));
        yield i;
    }
}

(async () => {
    let generator = generateSequence(16, 21);
    for await(let value of generator){
        console.log(value);
    }
})()



'Теперь у нас есть асинхронный генератор, который можно перебирать с помощью for'
'await ... of .'
'Это действительно очень просто. Мы добавляем ключевое слово async , и внутри'
'генератора теперь можно использовать await , а также промисы и другие асинхронные'
'функции.'
'С технической точки зрения, ещё одно отличие асинхронного генератора заключается в'
'том, что его метод generator.next() теперь тоже асинхронный и возвращает промисы.'
'Из обычного генератора мы можем получить значения при помощи result ='
'generator.next() . Для асинхронного нужно добавить await , вот так:'

// result = await generator.next();  result = {value: ..., done: true/false}


//Асинхронно перебираемые объекты

'Как мы уже знаем, чтобы сделать объект перебираемым, нужно добавить к нему'
'Symbol.iterator .'

'Обычная практика для Symbol.iterator – возвращать генератор, а не простой объект с next'

let rangeGen = {
    from: 30,
    to: 35,
    *[Symbol.iterator]() {
        for(let value = this.from; value <= this.to; value++){
            yield value;
        }
    }
};

for(let value of range){
    console.log(value);
}

'Здесь созданный объект range является перебираемым, а генератор *'
'[Symbol.iterator] реализует логику для перечисления значений.'
'Если хотим добавить асинхронные действия в генератор, нужно заменить'
'Symbol.iterator на асинхронный Symbol.asyncIterator :'

let asyncRangeGen = {
    from: 40,
    to: 45,
    async *[Symbol.asyncIterator]() {
        for (let value = this.from; value <= this.to; value++){
            await new Promise(resolve => setTimeout(resolve, 1000));
            yield value;
        }
    }
};

(async () => {
    for await(let value of asyncRangeGen){
        console.log(value);
    }
})();