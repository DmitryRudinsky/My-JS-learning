let currentUser = prompt('Кто там?', '');
if (currentUser == null || currentUser == ''){
    alert('Отменено');
}else if (currentUser != 'Админ'){
    alert('Я вас не знаю');
}else{
    let password = prompt('Пароль?', '');
    if (password == null || password == ''){
        alert('Отменено');
    }else if(password == 'Я Главный'){
        alert('Здравствуйте');
    }else{
        alert('Неверный пароль');
    }
}