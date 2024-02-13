"Кроме свойств length, и строковые объекты, и объекты-массивы содержат ряд свойств, значенями которых являются функции."

let doh = "aaaaa";
console.log(doh.toUpperCase()); //AAAAA
console.log(typeof doh.toUpperCase); //function

"У любой строки есть свойство toUpperCase. При вызове оно возвращает копию строки, в которой все буквы преобразованы в прописные."
"Существует также свойство toLoverCase, выполнябющее, наоборот, преобразование в строчные буквы."

"Свойства, содержащие функции, обычно называют МЕТОДАМИ значения, к которому они принадлежат, так, toUpperCase - это метод строки."

"В следующем примере показаны два метода, которые можно использовать для управления массивами:"

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);

console.log(sequence); //[ 1, 2, 3, 4, 5 ]

console.log(sequence.pop()); //5
console.log(sequence); //[ 1, 2, 3, 4 ]

"Метод push добавляет значенние в конец массива, а метод pop, наоборот,"
"удаляет из массива последнее значение и возвращает его."

