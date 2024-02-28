"Несколько интерфейсов могут использовать одно и то же имя свойства для разных целей."
"Например, я мог бы определить интерфейс, в котором метод toString преобразовывал бы объект в кусок пряжи."

"Когда мы заявили, что имена свойств являются строками, это было не совсем точно."
"Обычно так и есть, но имена могут быть и СИМВОЛАМИ."
"Символы - это значения, созданные с помощью функции Symbol."
"В отличие от строк, вновь созданные символы уникальны - нельзя создать один и тот же символ дважды."

let sym = Symbol("name");
console.log(sym == Symbol("name")); //false

class Rabbit{
    constructor(type){
        this.type = type;
    }

    speak(line){
        console.log(`${this.type} кролик говорит: ${line}`);
    }
}

Rabbit.prototype[sym] = 55;

let blackRabbit = new Rabbit("Убийственный");
console.log(blackRabbit[sym]); //55

"Строка, передаваемая в Symbol, используется при преобразовании её в строку и может упростить распознаванте символа,"
"при отображении в консоли. Но она не имеет никакого другого значения - несколько символов могут иметь одно и то же имя."

"Благодаря уникальности и удобству применения в качестве имён свойств, символы хорошо подходят для определения интерфейсов,"
"которые могут мирно сосуществовать с другими свойствами, независимо от их имён."

const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function(){
    return `${this.length} см голубой шерсти`;
}
console.log([1, 2, 3, 4, 5, 10].toString()); //1,2,3,4,5,10
console.log([1, 2, 3, 4, 5, 10][toStringSymbol]()); //6 см голубой шерсти

"Чтобы включить свойство символа в выражения объекта и класса, нужно заключить имя свойства в квадратные скобки."
"В результате благодаря нотации заключения в квадратные скобки, имя свойства будет вычисляться,"
"что позволяет ссылаться на привязку, которая содержит символ."

let stringObject = {
    [toStringSymbol]() {return "джутовая верёвка";}
};

console.log(stringObject[toStringSymbol]()); //джутовая верёвка