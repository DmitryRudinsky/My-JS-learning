'В классе Promise есть 6 статических методов'


//Promise.all

'Допустим, нам нужно запустить множество промисов параллельно и дождаться, пока все они выполнятся.'
'Например, параллельно загрузить несколько файлов и обработать результат, когда он готов.'
'Для этого как раз и пригодится Promise.all .'
'Синтаксис:'

//let promise = Promise.all([...ПРОМИСЫ...]);

'Метод Promise.all принимает массив промисов (может принимать любой перебираемый объект, '
'но обычно используется массив) и возвращает новый промис.'
'Новый промис завершится, когда завершится весь переданный список промисов, и его'
'результатом будет массив их результатов.'
'Например, Promise.all , представленный ниже, выполнится спустя 3 секунды, его'
'результатом будет массив [1, 2, 3] :'

function functionTrue(data){
    //console.log(data[2]);
    console.log("Разбираемся с массивом...");
    setTimeout(() => console.log(`Длина массива = ${data.length}`), 1400);
    for(let i = 0; i < data.length; ++i){
        console.log(data[i]);
    }
    console.log(data);
}

function functionFalse(data){
    console.log("You are lame...");
}

Promise.all([
    new Promise(resolve => setTimeout(() => resolve(10), 10000)),
    new Promise(function(resolve, reject){
        setTimeout(() => resolve(1), 1000)
    }),
    new Promise(resolve => setTimeout(() => resolve(2), 2000)),
    new Promise(resolve => setTimeout(() => resolve(3), 3000)),
    new Promise(function(resolve, reject){
        setTimeout(() => resolve(4), 4000)
    })
]).then(functionTrue, functionFalse);



'Обратите внимание, что порядок элементов массива в точности соответствует порядку'
'исходных промисов. Даже если первый промис будет выполняться дольше всех, его'
'результат всё равно будет первым в массиве.'
'Часто применяемый трюк – пропустить массив данных через map-функцию, которая для'
'каждого элемента создаст задачу-промис, и затем обернёт получившийся массив в'
'Promise.all .'
'Например, если у нас есть массив ссылок, то мы можем загрузить их вот так:'


let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
];
// Promise.all будет ожидать выполнения всех промисов
Promise.all(urls.map(url => fetch(url)))
    .then(responses => responses.forEach(
        response => console.log((`${response.url}: ${response.status}`))
    ));



'А вот пример побольше, с получением информации о пользователях GitHub по их логинам'
'из массива (мы могли бы получать массив товаров по их идентификаторам, логика та же):'


let names = ['iliakan', 'remy', 'jeresig'];
let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
    .then(responses => {
        for(let response of responses){
            console.log(`${response.url}: ${response.status}`);
        }
        return responses;
    })
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(users => users.forEach(user => console.log(user.name)));


'Если любой из промисов завершится с ошибкой, то промис, возвращённый Promise.all, немедленно завершается с этой ошибкой.'
/*
Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).catch(alert); // Error: Ошибка!

*/

'Здесь второй промис завершится с ошибкой через 2 секунды. Это приведёт к немедленной'
'ошибке в Promise.all , так что выполнится .catch : ошибка этого промиса становится'
'ошибкой всего Promise.all .'

'Если один промис завершается с ошибкой, то весь Promise.all завершается с ней,'
'полностью забывая про остальные промисы в списке. Их результаты игнорируются.'
'Например, если сделано несколько вызовов fetch , как в примере выше, и один не'
'прошёл, то остальные будут всё ещё выполняться, но Promise.all за ними уже не'
'смотрит. Скорее всего, они так или иначе завершатся, но их результаты будут'
'проигнорированы.'

//Promise.allSettled

'Promise.all завершается с ошибкой, если она возникает в любом из переданных'
'промисов. Это подходит для ситуаций «всё или ничего», когда нам нужны все результаты'
'для продолжения:'

/*
Promise.all([
    fetch('/template.html'),
    fetch('/style.css'),
    fetch('/data.json')
]).then(render); // методу render нужны результаты всех fetch
*/

'Метод Promise.allSettled всегда ждёт завершения всех промисов. В массиве'
'результатов будет'

//{status:"fulfilled", value:результат} для успешных завершений,
//{status:"rejected", reason:ошибка} для ошибок.

'Например, мы хотели бы загрузить информацию о множестве пользователей. Даже если в'
'каком-то запросе ошибка, нас всё равно интересуют остальные.'

'Используем для этого Promise.allSettled :'

let urls2 = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
];

Promise.all(urls2.map(url2 => fetch(url2)))
    .then(respone => {
        respone.forEach((result, num) => {
            if (result.status == "fulfilled") {
                console.log(`${urls[num]}: ${result.value.status}`);
            }
              if (result.status == "rejected") {
                console.log(`${urls[num]}: ${result.reason}`);
            }
        });
    });


"Массив results в строке (*) будет таким:"

/*
[
  {status: 'fulfilled', value: ...объект ответа...},
  {status: 'fulfilled', value: ...объект ответа...},
  {status: 'rejected', reason: ...объект ошибки...}
]
*/



//Promise.race

'Метод очень похож на Promise.all , но ждёт только первый промис, из которого берёт'
'результат (или ошибку).'

'Например, тут результат будет First!:'

Promise.race([
    new Promise(resolve => setTimeout(() => resolve("First!"), 1000)),
    new Promise(resolve => setTimeout(() => resolve("Second"), 2000)),
    new Promise(resolve => setTimeout(() => resolve("Third"), 3000))
]).then(console.log)

"Быстрее всех выполнился первый промис, он и дал результат. После этого остальные промисы игнорируются."



//Promise.any

'Метод очень похож на Promise.race, но ждёт только первый успешно выполненный промис, из которого берёт результат.'

'Если ни один из переданных промисов не завершится успешно, тогда возвращённый объект Promise будет отклонён с помощью AggregateError'
' – специального объекта ошибок, который хранит все ошибки промисов в своём свойстве errors.'

'Например, здесь, результатом будет 1:'

Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(console.log); // 1

'Первый промис в этом примере был самым быстрым, но он был отклонён, поэтому результатом стал второй. '
'После того, как первый успешно выполненный промис «выиграет гонку», все дальнейшие результаты будут проигнорированы.'

'Вот пример, в котором все промисы отклоняются:'

Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ещё одна ошибка!")), 2000))
  ]).catch(error => {
    console.log(error.constructor.name); // AggregateError
    console.log(error.errors[0]); // Error: Ошибка!
    console.log(error.errors[1]); // Error: Ещё одна ошибка!
});

