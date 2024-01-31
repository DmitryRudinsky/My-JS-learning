'Давайте вернёмся к ситуации из главы Введение: колбэки: у нас есть последовательность'
'асинхронных задач, которые должны быть выполнены одна за другой. Например, речь'
'может идти о загрузке скриптов. Как же грамотно реализовать это в коде?'
'Промисы предоставляют несколько способов решения подобной задачи.'
'В этой главе мы разберём цепочку промисов.'

'Она выглядит вот так:'

new Promise(function(resolve, reject){
    setTimeout(() => resolve(1), 5000);
}).then(function(result){
    console.log(result);
    return result * 2; 
}).then(function(result){
    console.log(result);
    return result * 2;
}).then(function(result){
    console.log(result);
    return result * 2;
});
console.log('0')
setTimeout(() => console.log('1'), 1000);
setTimeout(() => console.log('2'), 2000);
setTimeout(() => console.log('3'), 3000);
setTimeout(() => console.log('4'), 4000);

'Идея состоит в том, что результат первого промиса передаётся по цепочке обработчиков .then.'

'Поток выполнения такой:'

'Начальный промис успешно выполняется через 1 секунду (*),'
'Затем вызывается обработчик в .then (**).'
'Возвращаемое им значение передаётся дальше в следующий обработчик .then (***)'
'…и так далее.'
'В итоге результат передаётся по цепочке обработчиков, и мы видим несколько alert подряд, которые выводят: 1 → 2 → 4.'

'Всё это работает, потому что вызов promise.then тоже возвращает промис, '
'так что мы можем вызвать на нём следующий .then.'

'Когда обработчик возвращает какое-то значение, то оно становится результатом выполнения соответствующего'
 'промиса и передаётся в следующий .then.'


//  Классическая ошибка новичков: технически возможно добавить много обработчиков .then к единственному промису. 
//  Но это не цепочка.

let promise = new Promise(function(resolve, reject){
    setTimeout(() => resolve("Это не цепочка промисов"), 1000);
});

promise.then(function(result){
    console.log(result);
    return result + '!';
})
    
promise.then(function(result){
    console.log(result);
    return result + '!';
})

promise.then(function(result){
    console.log(result);
    return result + "!";
}).then(function(result){
    console.log(result);
    return result + ' Однако это уже можно считать цепочкой ;)';
}).then(function(result){
    console.log(result);
    return result;
})


// 'Возвращаем промисы'

'Обработчик handler, переданный в .then(handler), может вернуть промис.'
'В этом случае дальнейшие обработчики ожидают, пока он выполнится, и затем получают его результат.'
'Например:'

new Promise(function(resolve, reject){
    setTimeout(() => resolve(10), 1000);
}).then(function(result){
    console.log(result);
    return new Promise(function(resolve, reject){
        setTimeout(() => resolve(result * 2), 1000);
    });
}).then(function(result){
    console.log(result);
    return new Promise(function(resolve, reject){
        setTimeout(() => resolve(result * 2), 1000);
    });
}).then(function(result){
    console.log(result);
})


'Здесь первый .then показывает 1 и возвращает новый промис new Promise(…) в'
'строке (*) . Через одну секунду этот промис успешно выполняется, и его результат'
'(аргумент в resolve , то есть result * 2 ) передаётся обработчику в следующем'
'.then . Он находится в строке (**) , показывает 2 и делает то же самое.'
'Таким образом, как и в предыдущем примере, выводятся 1 → 2 → 4, но сейчас между'
'вызовами alert существует пауза в 1 секунду.'
'Возвращая промисы, мы можем строить цепочки из асинхронных действий.'



// Пример: loadScript

'Давайте используем эту возможность вместе с промисифицированной функцией'
'loadScript , созданной нами в предыдущей главе, чтобы загружать скрипты по очереди,'
'последовательно:'

function loadScript(src) {
    return new Promise(function(resolve, reject) {
      let script = document.createElement('script');
      script.src = src;
  
      script.onload = () => resolve(script);
      script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));
  
      document.head.append(script);
    });
}

loadScript("/article/promise-chaining/one.js")
    .then(function(script) {
        return loadScript("/article/promise-chaining/two.js");
    })
    .then(function(script) {
        return loadScript("/article/promise-chaining/three.js");
    })
    .then(function(script) {
        // вызовем функции, объявленные в загружаемых скриптах,
        // чтобы показать, что они действительно загрузились
        one();
        two();
        three();
});

'ИЛИ'

loadScript("/article/promise-chaining/one.js")
    .then(script => loadScript("/article/promise-chaining/two.js"))
    .then(script => loadScript("/article/promise-chaining/three.js"))
    .then(script => {
    // скрипты загружены, мы можем использовать объявленные в них функции
    one();
    two();
    three();
});

//Более сложный пример: fetch

'Во фронтенд-разработке промисы часто используются, чтобы делать запросы по сети.'
'Давайте рассмотрим один такой пример.'
'Мы будем использовать метод fetch, чтобы подгрузить информацию о пользователях с'
'удалённого сервера. Этот метод имеет много опциональных параметров, разобранных в'
'соответствующих разделах, но базовый синтаксис весьма прост:'

let promiseF = fetch('url');

'Этот код запрашивает по сети url и возвращает промис. Промис успешно выполняется и'
'в свою очередь возвращает объект response после того, как удалённый сервер'
'присылает заголовки ответа, но до того, как весь ответ сервера полностью загружен.'

'Чтобы прочитать полный ответ, надо вызвать метод response.text() : он тоже'
'возвращает промис, который выполняется, когда данные полностью загружены с'
'удалённого сервера, и возвращает эти данные.'

'Код ниже запрашивает файл user.json и загружает его содержимое с сервера:'


fetch('/article/promise-chaining/user.json')
    // .then в коде ниже выполняется, когда удалённый сервер отвечает
    .then(function(response){
        // response.text() возвращает новый промис,
        // который выполняется и возвращает полный ответ сервера,
        // когда он загрузится
        return response.text
    })
    .then(function(text){
        // ...и здесь содержимое полученного файла
        console.log(text);
    })

'Есть также метод response.json(), который читает данные в формате JSON. '
'Он больше подходит для нашего примера, так что давайте использовать его.'

'Мы также применим стрелочные функции для более компактной записи кода:'


// то же самое, что и раньше, только теперь response.json() читает данные в формате JSON
fetch('/article/promise-chaining/user.json')
  .then(response => response.json())
  .then(user => console.log(user.name)); // iliakan, получили имя пользователя


'Теперь давайте что-нибудь сделаем с полученными данными о пользователе.'
'Например, мы можем послать запрос на GitHub, чтобы загрузить данные из профиля пользователя и показать его аватар:'

// Запрашиваем user.json
fetch('/article/promise-chaining/user.json')
  // Загружаем данные в формате json
  .then(response => response.json())
  // Делаем запрос к GitHub
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  // Загружаем ответ в формате json
  .then(response => response.json())
  // Показываем аватар (githubUser.avatar_url) в течение 3 секунд (возможно, с анимацией)
  .then(githubUser => {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
    setTimeout(() => img.remove(), 3000); // (*)
});


