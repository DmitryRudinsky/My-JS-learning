function isEmpty(obj) {
    for (let key in obj){
        if (key){
            return false;
            break;
        }
    }
    return true;
}

let obj = {
    name: 'Dima'
};

alert(isEmpty(obj));