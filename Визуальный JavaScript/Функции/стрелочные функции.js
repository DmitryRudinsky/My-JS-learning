"Существует и третий способ записи функций, и он очень отличается от остальных."
"Вместо ключевого слова function используется стрелка (=>)"

const power = (base, exponent) => {
    let res = 1;
    for(let i = 0; i < exponent; i++){
        res *= base;
    }
    return res;
};

console.log(power(2, 10));

"Стрелка ставится после списка параметров, затем идёт тело функции. Стрелка выражает что-то вроде 'эти входные данные дают этот результат'."

"Если имя параметра только одно, можно опустить круглые скобки, в которые заключён список параметров. Если тело функции представляет собой"
"единственное выражение, а не блок в фигурных скобках, то функция будет возвращать это выражение. Таким образом, следующие два определения"
"square делают одно и то же:"

const square1 = (x) => {return x * x};
const square2 = x => x * x;

"Если у стрелочной функции вооюще нет параметров, то её список представляет собой просто пустые скобки."

const sayHI = () => {
    console.lof("Hi, guys");
};

"Особой причины, по которой в языке было бы необходимо иметь и стрелочные функции, и выражения function нет."
"За исключением незначительных деталей, они делают одно и то же."
"Стрелочные функции появились в 2015 году главным образом для того, чтобы стало возможным писать"
"небольшие функциональные выражения менее многословным способом."

