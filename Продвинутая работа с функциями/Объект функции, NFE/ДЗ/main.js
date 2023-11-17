// 1 задание

function makeCounter() {
    let count = 0;
    function counter() {
        return count++;
    }
    counter.set = value => count = value;
    counter.decrease = () => count--;
    return counter;
}


// 2 задание

function sum(a){
    let sm = a;
    function fun(b){
        sm += b;
        return fun;
    }
    fun.toString = function(){
        return sm;
    }

    return fun;
}

