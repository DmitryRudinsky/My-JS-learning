"Сделайте функцию, которая параметром будет получать дату, а возвращать день недели словом, соответствующий этой дате."

function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return days[date.getDay()];
}
  
let date = new Date(2024, 1, 25); // 25 февраля 2024 года
console.log( getWeekDay(date) ); // ВС