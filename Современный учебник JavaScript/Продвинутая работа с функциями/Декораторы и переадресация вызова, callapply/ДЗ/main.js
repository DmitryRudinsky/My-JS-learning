//1 задание

function spy(func){
    function wrapper(...args){
        wrapper.calls.push(args);
        return func.apply(this, arguments);
    }
    wrapper.calls = [];
    return wrapper;
}

//2 задание

function delay(f, ms){
    return function(){
        setTimeout(() => f.apply(this, arguments), ms);
    };
}

//3 задание

function debounce(f, ms){
    let isCooldown = false;
    return function(){
        if (isCooldown) return;
        f.apply(this, arguments);
        isCooldown = true;
        setTimeout(() => isCooldown = false, ms);
    }
}

