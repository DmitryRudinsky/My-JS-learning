'Промисификация – это длинное слово для простого преобразования. Мы берём функцию,'
'которая принимает колбэк и меняем её, чтобы она вместо этого возвращала промис.'
'Такие преобразования часто необходимы в реальной жизни, так как многие функции и'
'библиотеки основаны на колбэках, а использование промисов более удобно, поэтому есть'
'смысл «промисифицировать» их.'
'Например, у нас есть loadScript(src, callback)'

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
  
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));
  
    document.head.append(script);
}
// использование:
// loadScript('path/script.js', (err, script) => {...})

'Давайте промисифицируем её. Новая функция loadScriptPromise(src) будет делать'
'то же самое, но будет принимать только src (не callback ) и возвращать промис.'

let loadScriptPromise = function(src){
    return new Promise((resolve, reject) => {
        loadScript(src, (err, script) => {
            if (err) {reject(err)}
            else {resolve(script)}
        });
    })
}
// использование:
// loadScriptPromise('path/script.js').then(...)

'Теперь loadScriptPromise хорошо вписывается в код, основанный на промисах.'
'Как видно, она передаёт всю работу исходной функции loadScript , предоставляя ей'
'колбэк, по вызову которого происходит resolve/reject промиса.'
'На практике нам, скорее всего, понадобится промисифицировать не одну функцию,'
'поэтому имеет смысл сделать для этого специальную «функцию-помощник».'
'Мы назовём её promisify(f) – она принимает функцию для промисификации f и'
'возвращает функцию-обёртку.'
'Эта функция-обёртка делает то же самое, что и код выше: возвращает промис и передаёт'
'вызов оригинальной f , отслеживая результат в своём колбэке:'

function promisify(f) {
    return function (...args) { // возвращает функцию-обёртку
        return new Promise((resolve, reject) => {
            function callback(err, result) { // наш специальный колбэк для f
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            }
            args.push(callback); // добавляем колбэк в конец аргументов f
            f.call(this, ...args); // вызываем оригинальную функцию
        });
    };
};
  
// использование:

/*
let loadscriptPromise = promisify(loadScript);
loadScriptPromise(...).then(...);
*/