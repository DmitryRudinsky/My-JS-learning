"Сделайте функцию, которая параметром будет принимать число и удалять из него нули."

let delZeros = (number => Number(String(number).replace(/[0]/g, "")));
console.log(delZeros(12304506708));