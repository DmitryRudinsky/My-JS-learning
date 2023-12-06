// В JavaScript можно наследовать только от одного объекта. Объект имеет единственный
// [[Prototype]] . И класс может расширить только один другой класс.
// Иногда это может ограничивать нас. Например, у нас есть класс StreetSweeper и класс
// Bicycle , а мы хотим создать их смесь: StreetSweepingBicycle .
// Или у нас есть класс User , который реализует пользователей, и класс EventEmitter ,
// реализующий события. Мы хотели бы добавить функциональность класса EventEmitter
// к User , чтобы пользователи могли легко генерировать события.
// Для таких случаев существуют «примеси».
// По определению из Википедии, примесь – это класс, методы которого предназначены
// для использования в других классах, причём без наследования от примеси.
// Другими словами, примесь определяет методы, которые реализуют определённое
// поведение. Мы не используем примесь саму по себе, а используем её, чтобы добавить
// функциональность другим классам.


//Пример примеси
// Простейший способ реализовать примесь в JavaScript – это создать объект с полезными
// методами, которые затем могут быть легко добавлены в прототип любого класса.
// В примере ниже примесь sayHiMixin имеет методы, которые придают объектам класса
// User возможность вести разговор:

let sayHiMixin = {
    sayHi(){
        alert(`Привет, ${this.name}`);
    },
    sayBye() {
        alert(`Пока, ${this.name}`);
    }
};

class User {
    constructor(name) {
        this.name = name;
    }
};

Object.assign(User.prototype, sayHiMixin);

new User("Вася").sayHi();

// Это не наследование, а просто копирование методов. Таким образом, класс User может
// наследовать от другого класса, но при этом также включать в себя примеси,
// «подмешивающие» другие методы
    

// Примеси могут наследовать друг друга.
// В примере ниже sayHiMixin наследует от sayMixin 

let sayMixin2 = {
    say(phrase) {
        alert(phrase);
    }
};

let sayHiMixin2 = {
    __proto__: sayHiMixin,
    sayHi() {
        super.say(`Привет, ${this.name}`);
    },
    sayBye() {
        super.say(`Пока, ${this.name}`); 
    }
};

class User2 {
    constructor(name) {
    this.name = name;
    }
}

Object.assign(User2.prototype, sayHiMixin);

new User2("Дима").sayHi(); //Привет, Дима



// EventMixin
// Многие объекты в браузерной разработке (и не только) обладают важной способностью –
// они могут генерировать события. События – отличный способ передачи информации всем,
// кто в ней заинтересован. Давайте создадим примесь, которая позволит легко добавлять
// функциональность по работе с событиями любым классам/объектам.
// Примесь добавит метод .trigger(name, [data]) для генерации события. Аргумент
// name – это имя события, за которым могут следовать другие аргументы с данными для
// события.
// Также будет добавлен метод .on(name, handler) , который назначает обработчик
// для события с заданным именем. Обработчик будет вызван, когда произойдёт событие с
// указанным именем name , и получит данные из .trigger .
// …и метод .off(name, handler) , который удаляет обработчик указанного события.

let eventMixin = {
    /**
    * Подписаться на событие, использование:
    * menu.on('select', function(item) { ... }
    */
    on(eventName, handler) {
        if (!this._eventHandlers) this._eventHandlers = {};
        if (!this._eventHandlers[eventName]) {
            this._eventHandlers[eventName] = [];
        }
        this._eventHandlers[eventName].push(handler);
    },
    /**
    * Отменить подписку, использование:
    * menu.off('select', handler)
    */
    off(eventName, handler) {
        let handlers = this._eventHandlers && this._eventHandlers[eventName];
        if (!handlers) return;
        for (let i = 0; i < handlers.length; i++) {
            if (handlers[i] === handler) {
                handlers.splice(i--, 1);
            }
        }
    },
    /**
    * Сгенерировать событие с указанным именем и данными
    * this.trigger('select', data1, data2);
    */
    trigger(eventName, ...args) {
        if (!this._eventHandlers || !this._eventHandlers[eventName]) {
            return; // обработчиков для этого события нет
        }
    // вызовем обработчики
        this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
    }
};
    
