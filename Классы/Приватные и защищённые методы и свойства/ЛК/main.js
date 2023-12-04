// Один из важнейших принципов объектно-ориентированного программирования –
// разделение внутреннего и внешнего интерфейсов.

// Устройства, которыми мы пользуемся, обычно довольно сложно устроены. Но разделение
// внутреннего и внешнего интерфейсов позволяет нам пользоваться ими без каких-либо
// проблем.


// В объектно-ориентированном программировании свойства и методы разделены на 2
// группы:

// Внутренний интерфейс – методы и свойства, доступные из других методов класса, но
// не снаружи класса.

// Внешний интерфейс – методы и свойства, доступные снаружи класса.


// В JavaScript есть два типа полей (свойств и методов) объекта:
// Публичные: доступны отовсюду. Они составляют внешний интерфейс. До этого момента
// мы использовали только публичные свойства и методы.
// Приватные: доступны только внутри класса. Они для внутреннего интерфейса.


// Защищённое свойство «waterAmount»

// Давайте для начала создадим простой класс для описания кофеварки:

class CoffeeMachine{
    waterAmount = 0;
    constructor(power){
        this.power = power;
        alert( `Создана кофеварка, мощность: ${power}` );
    }
}

let coffeeMachine = new CoffeeMachine(100);

coffeeMachine.waterAmount = 200;

// Прямо сейчас свойства waterAmount и power публичные. Мы можем легко получать и
// устанавливать им любое значение извне.
// Давайте изменим свойство waterAmount на защищённое, чтобы иметь больше контроля
// над ним. Например, мы не хотим, чтобы кто-либо устанавливал его ниже нуля.

// Защищённые свойства обычно начинаются с префикса _ .
// Это не синтаксис языка: есть хорошо известное соглашение между программистами, что
// такие свойства и методы не должны быть доступны извне. Большинство программистов
// следуют этому соглашению.
// Так что наше свойство будет называться _waterAmount :


class CoffeeMachine2{
    _waterAmount = 0;
    set waterAmount(value){
        if (value < 0) throw new Error("Отрицательное количество воды");
        this._waterAmount = value;
    }
    get waterAmount(){
        return this._waterAmount;
    }

    constructor(power){
        this._power = power;
    }
}

let coffeeMachine2 = new CoffeeMachine2(100);

coffeeMachine2.waterAmount = -10;// Error: Отрицательное количество воды

// Свойство только для чтения «power»
// Давайте сделаем свойство power доступным только для чтения. Иногда нужно, чтобы
// свойство устанавливалось только при создании объекта и после этого никогда не
// изменялось.
// Это как раз требуется для кофеварки: мощность никогда не меняется.
// Для этого нам нужно создать только геттер, но не сеттер:

class CoffeeMachine3{
    _waterAmount = 0;
    set waterAmount(value){
        if (value < 0) throw new Error("Отрицательное количество воды");
        this._waterAmount = value;
    }
    get waterAmount(){
        return this._waterAmount;
    }
    constructor(power){
        this._power = power;
    }

    get power(){
        return this._power;
    }
}

let coffeeMachine3 = new CoffeeMachine3(100);
alert(`Мощность: ${coffeeMachine3.power}W`); // Мощность: 100W
coffeeMachine3.power = 25; // Error (no setter)


// Приватное свойство «#waterLimit»

// Есть новшество в языке JavaScript, которое почти добавлено в стандарт: оно добавляет
// поддержку приватных свойств и методов.
// Приватные свойства и методы должны начинаться с # . Они доступны только внутри
// класса.
// Например, в классе ниже есть приватное свойство #waterLimit и приватный метод
// #checkWater для проверки количества воды:

class CoffeeMachine4{
    #waterLimit = 200;
    #checkWater(value){
        if( value < 0) throw new Error("Отрицательный уровень воды");
        if (value > this.#waterLimit) throw new Error("Слишком много воды");
    }
}

let coffeeMachine4 = new CoffeeMachine4();
coffeeMachine.#checkWater(); // Error
coffeeMachine.#waterLimit = 1000; // Error


// На уровне языка # является специальным символом, который означает, что поле
// приватное. Мы не можем получить к нему доступ извне или из наследуемых классов.
// Приватные поля не конфликтуют с публичными. У нас может быть два поля одновременно
// – приватное #waterAmount и публичное waterAmount .
// Например, давайте сделаем аксессор waterAmount для #waterAmount :


class CoffeeMachine5{
    #waterAmount = 0;
    get waterAmount(){
        return this.#waterAmount;
    }
    set waterAmount(value){
        if (value < 0) throw new Error("Отрицательный уровень воды");
        this.#waterAmount = value;
    }
}

let coffeeMachine5 = new CoffeeMachine5();
machine.waterAmount = 100;


// В отличие от защищённых, функциональность приватных полей обеспечивается самим
// языком. Это хорошо.
// Но если мы унаследуем от CoffeeMachine , то мы не получим прямого доступа к
// #waterAmount . Мы будем вынуждены полагаться на геттер/сеттер waterAmount 


