"Интерфейсы часто состоят главным образом из методов, но они также могут включать в себя свойства,"
"которые содержат нефункциональные значения."
"Например, объекты Map имеют свойство size, сообщающее нам о количестве хранящихся в них ключей."

"Для подобных объектов даже нет необходимости вычислять и хранить такое свойство непосредственно в экземпляре."
"Даже свойства, к которым есть прямой доступ, могут скрывать вызов метода."
"Такие методы называются ГЕТТЕРАМИ, и для их определения ставится слово get перед именем метода в выражении объекта или"
"объявлении класса."

let varyingSize = {
    get size() {
        return Math.floor(Math.random() * 100);
    }
};

console.log(varyingSize.size); //23
console.log(varyingSize.size); //78


"Всякий раз, когда кто-то читает содержимое свойства size такого объекта, вызывается связанный метод."
"Для того, чтобы сделать подобное для записи свойства, используется СЕТТЕР."

class Temperature{
    constructor(celsius){
        this.celsius = celsius;
    }

    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }
    set fahrenheit(value){
        this.celsius = (value - 32) / 1.8;
    }
    static fromFahrenheit(value){
        return new Temperature((value - 32) / 1.8);
    }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit); //71.6
temp.fahrenheit = 451;
console.log(temp.celsius); //233

"Класс Temperature позволяет читать и записывать температуру в градусах Целсия или Фаренгейта, но внутри температура "
"хранится только в градусах Цельсия. Преобразование из них в градусы Фаренгейта и обратно выполняется автоматически в геттере и сеттере."

"Иногда желательно прикрепить некоторые свойства не к прототипу, а непосредственно к функции конструктора."
"Такие методы не будут иметь доступ к экземпляру класса, но их можно будет использовать, например, для предоставления"
"дополнительных способов создания экземпляров."

"Методы, описанные внутри объявления класса, перед именем которых стоит слово static, хранятся в конструкторе."
"Таким образом, класс Temperature позволяет написать Temperature.fromFahrenheit(100), чтобы получить температуру в градусах Цельсия."

let tempFromFar = Temperature.fromFahrenheit(86);
console.log(tempFromFar.celsius); //30
console.log(tempFromFar.fahrenheit); //86



"Примеры:"

class User{
    constructor(){
        this.firstName = "";
        this.lastName = "";
    }

    set setFirstName(firstname){
        this.firstName = firstname;
    }

    set setSurname(lastname){
        this.lastName = lastname;
    }

    get getFullName(){
        return this.firstName + " " + this.lastName;
    }
}

let user = new User();
user.setFirstName = "Петя";
user.setSurname = "Иванов";
console.log(user.getFullName); // Петя Иванов
console.log(user); //User { firstName: 'Петя', lastName: 'Иванов' }


