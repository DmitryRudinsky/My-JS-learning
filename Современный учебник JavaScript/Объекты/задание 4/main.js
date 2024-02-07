function multiplyNumeric(obj){
    for(let key in obj){
        if (typeof(obj[key]) == 'number'){
            obj[key] = obj[key] * 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

for(let key in menu){
    alert(menu[key]);
}

multiplyNumeric(menu)

for(let key in menu){
    alert(menu[key]);
}