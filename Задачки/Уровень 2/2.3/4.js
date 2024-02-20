/*

Дана дата в следующем формате:
'2025-12-31'
Преобразуйте эту дату в следующий объект:
{
	year: '2025',
	month: '12',
	day: '31',
}

*/

let date = '2025-12-31';

function newDateObject(string){
    let array = date.split('-');
    return obj = {
        year: array[0],
        month: array[1],
        day: array[2],
    };
}

console.log(newDateObject(date));