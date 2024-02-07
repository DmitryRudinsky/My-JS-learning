// JavaScript позволяет вызывать throw с любыми аргументами, то есть технически наши
// классы ошибок не нуждаются в наследовании от Error . Но если использовать
// наследование, то появляется возможность идентификации объектов ошибок посредством
// obj instanceof Error . Так что лучше применять наследование.
// По мере роста приложения, наши собственные ошибки образуют иерархию, например,
// HttpTimeoutError может наследовать от HttpError и так далее.


// Расширение Error
// В качестве примера рассмотрим функцию readUser(json) , которая должна читать
// данные пользователя в формате JSON.
// Пример того, как может выглядеть корректный json :

let json = `{ "name": "John", "age": 30 }`;

// Внутри будем использовать JSON.parse . При получении некорректного json он будет
// генерировать ошибку SyntaxError . Но даже если json синтаксически верен, то это не
// значит, что это будет корректный пользователь, верно? Могут быть пропущены
// необходимые данные. Например, могут отсутствовать свойства name и age , которые
// являются необходимыми для наших пользователей.
// Наша функция readUser(json) будет не только читать JSON-данные, но и проверять их
// («валидировать»). Если необходимые поля отсутствуют или данные в неверном формате,
// то это будет ошибкой. Но не синтаксической ошибкой SyntaxError , потому что данные
// синтаксически корректны. Это будет другая ошибка.
// Назовём её ошибкой валидации ValidationError и создадим для неё класс. Ошибка
// этого вида должна содержать информацию о поле, которое является источником ошибки.
// Наш класс ValidationError должен наследовать от встроенного класса Error .
// Класс Error встроенный, вот его примерный код, просто чтобы мы понимали, что
// расширяем:

/*
class Error {
    constructor(message) {
    this.message = message;
    this.name = "Error"; // (разные имена для разных встроенных классов ошибок)
    this.stack = <стек вызовов>; // нестандартное свойство, но обычно поддерживается
    }
}
*/

// Теперь давайте унаследуем от него ValidationError и попробуем новый класс в
// действии:

class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = "ValidationError";
    }
}

function readUser(json) {
    let user = JSON.parse(user);
    if(!user.age){
        throw new ValidationError("Нет поля: age")
    }
    if(!user.name){
        throw new ValidationError("Нет поля: name");
    }
    return user;
}

try {
    let user = readUser('{ "age": 25 }');
} catch(err){
    if(err instanceof ValidationError){
        alert("Некорректные данные. " + err.message);
    } else if(err instanceof SyntaxError){
        alert("JSON Ошибка Синтаксиса: " + err.message);
    } else{
        throw err;
    }
}


// Блок try..catch в коде выше обрабатывает и нашу ValidationError , и встроенную
// SyntaxError из JSON.parse .
// Обратите внимание, как мы используем instanceof для проверки конкретного типа
// ошибки в строке (*) .
// Мы можем также проверить тип, используя err.name: err.name == "SyntaxError"

// Версия с instanceof гораздо лучше, потому что в будущем мы собираемся расширить
// ValidationError , сделав его подтипы, такие как PropertyRequiredError . И
// проверка instanceof продолжит работать для новых наследованных классов. Так что
// это на будущее.


// Класс ValidationError является слишком общим. Много что может пойти не так.
// Свойство может отсутствовать или иметь неверный формат (например, строка как
// значение возраста age ). Поэтому для отсутствующих свойств сделаем более конкретный
// класс PropertyRequiredError . Он будет нести дополнительную информацию о
// свойстве, которое отсутствует.


class PropertyRequiredError extends ValidationError {
    constructor(property) {
        super("Нет свойства: " + property);
        this.name = "PropertyRequiredError";
        this.property = property;
    }
}
    

try {
    let user = readUser('{ "age": 25 }');
} catch(err){
    if(err instanceof ValidationError){
        alert("Неверные данные: " + err.message); // Неверные данные: Нет свойства: name
        alert(err.name); // PropertyRequiredError
        alert(err.property); // name
    } else if(err instanceof SyntaxError){
        alert("JSON Ошибка Синтаксиса: " + err.message);
    } else{
        throw err;
    }
}

// Новый класс PropertyRequiredError очень просто использовать: необходимо указать
// только имя свойства new PropertyRequiredError(property) . Сообщение для
// пользователя message генерируется конструктором.

