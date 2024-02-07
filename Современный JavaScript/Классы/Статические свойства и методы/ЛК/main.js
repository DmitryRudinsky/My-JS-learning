// Мы также можем присвоить метод самой функции-классу, а не её "prototype" . Такие
// методы называются статическими.
// В классе такие методы обозначаются ключевым словом static , например:

class User{
    static staticMethod(){
        alert(this == User);
    }
}

User.staticMethod();

// Значением this при вызове User.staticMethod() является сам конструктор класса
// User (правило «объект до точки»).
// Обычно статические методы используются для реализации функций, принадлежащих
// классу, но не к каким-то конкретным его объектам.
// Например, есть объекты статей Article , и нужна функция для их сравнения.
// Естественное решение – сделать для этого метод Article.compare


class Article{
    constructor(title, date){
        this.title = title;
        this.date = date;
    }
    static compare(ArticleA, ArticleB){
        return ArticleA.date - ArticleB.date;
    }
}

let articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1))
]

articles.sort(Article.compare);

alert(articles[0].title); //CSS


// Здесь метод Article.compare стоит «над» статьями, как способ их сравнения. Это
// метод не отдельной статьи, а всего класса.
// Другим примером может быть так называемый «фабричный» метод. Представим, что нам
// нужно создавать статьи различными способами:
// 1. Создание через заданные параметры ( title , date и т. д.).
// 2. Создание пустой статьи с сегодняшней датой.
// 3. …или как-то ещё.
// Первый способ может быть реализован через конструктор. А для второго можно
// использовать статический метод класса.
// Такой как Article.createTodays() в следующем примере:


class Article4 {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }
    static createTodays() {
        return new this("Сегодняшний дайджест", new Date());
    }
}
let article = Article4.createTodays();
alert( article.title ); // Сегодняшний дайджест

// Теперь каждый раз, когда нам нужно создать сегодняшний дайджест, нужно вызывать
// Article.createTodays() . Ещё раз, это не метод одной статьи, а метод всего класса.
// Статические методы также используются в классах, относящихся к базам данных, для
// поиска/сохранения/удаления вхождений в базу данных


// Статические свойства также возможны, они выглядят как свойства класса, но с static в
// начале

class Article2{
    static name = "Dmitry Gula";
}
alert(Article2.name); //Dmitry Gula

//Это то же самое, что и прямое присваивание Article 

// Статические свойства и методы наследуются.
// Например, метод Animal.compare в коде ниже наследуется и доступен как
// Rabbit.compare 

class Animal{
    constructor(name, speed){
        this.name = name;
        this.speed = speed;
    }
    run(speed = 0){
        this.speed += speed;
        alert(`${this.name} бежит со скоростью ${this.speed}!`);
    }
    static compare(AnimalA, AnimalB){
        return AnimalA.speed - AnimalB.speed;
    }
}

class Rabbit extends Animal{
    hide(){
        alert(`${this.name} прячется...`);
    }
}

let rabbits = [
    new Rabbit("Белый кролик", 10),
    new Rabbit("Чёрный кролик", 5)
];
    
rabbits.sort(Rabbit.compare);
rabbits[0].run(); //Чёрный кролик бежит со скоростью 5!


