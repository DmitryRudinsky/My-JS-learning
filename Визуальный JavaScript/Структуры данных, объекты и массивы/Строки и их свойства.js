"Добавить к строке новое свойство не получится."

"Строковые, числовые и логические значения не являются объектами, и хотя язык не будет жаловаться,"
"если вы попытаетесь назначить им новые свойства, фактически он эти свойства не сохранит."
"Такие значения неизменяемы и не могут быть изменены."

"Но у таких типов есть встроенные свойства. Каждое строковое значение имеет ряд методов. Из них особенно полезными являются"
"slice и indexOf, которые подобны одноимённым методам для массивов."
console.log("кокосы".slice(3, 6)) //осы
console.log("кокосы".indexOf("ы")) //5


"Метод trim удаляет пробельные символы(пробелы, символы перевода строки, табуляции и аналогичные символы) в начале и в конце строки."
console.log("      okay    \n".trim()); //okay


"Метод padStart принимает в качетсве аргументов желаемую длину и символ заполнения."
console.log(String(6).padStart(3, "0"));
console.log("M".padStart(10, "L")); //LLLLLLLLLM


"С помощью функции split можно разделить строку на части в местах, где встречаются заданные фрагменты, а затем снова её соединить"
"с помощью функции join"
let sentence = "Птицы-секретари умеют громко топать";
let words = sentence.split(" ");
console.log(words); //[ 'Птицы-секретари', 'умеют', 'громко', 'топать' ]
console.log(words.join(". ")); //Птицы-секретари. умеют. громко. топать


"С помощью метода repeat можно повторить строку несколько раз - будет создана новая строка, содержаящая несколько склеенных вместе"
"копий исходной строки."
console.log("LA".repeat(3)); //LALALA
