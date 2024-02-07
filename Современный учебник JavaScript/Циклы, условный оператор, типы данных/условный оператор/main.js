let accessAllowed;
let age = prompt('Сколько вам лет?', '');




if (age > 18) {
accessAllowed = true;
} else {
accessAllowed = false;
}


// Будет эквивалентно 


let accessAllowed2 = (age > 18) ? true : false;


// Несколько операторов сравнения


let message = (age < 3) ? 'Здравствуй, малыш!' :
(age < 18) ? 'Привет!' :
(age < 100) ? 'Здравствуйте!' :
'Какой необычный возраст!';
alert( message );

let message1 = (age < 3) ? 'Здравствуй, малыш!' : (age < 18) ? 'Привет!' : (age < 100) ? 'Здравствуйте!' : 'Какой необычный возраст!';
alert( message );