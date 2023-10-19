let message;


// if (login == 'Сотрудник') {
// message = 'Привет';
// } else if (login == 'Директор') {
// message = 'Здравствуйте';
// } else if (login == '') {
// message = 'Нет логина';
// } else {
// message = '';
// }

message = (login == 'Сотрудник') ? 'Привет' : (login == 'Директор') ? message = 'Здравствуйте' : (login == '') ? 'Нет логина' : '';