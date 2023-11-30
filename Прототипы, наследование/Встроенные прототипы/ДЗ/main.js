//1 задание

Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
  };
  
function f() {
    alert("Hello!");
}
  
f.defer(1000); 


//2 задание

Function.prototype.defer2 = function(ms){
    let f = this;
    return function(...args){
        setTimeout(() => f.apply(this, args), ms);
    }
};

function f2(a, b){
    alert(a + b);
};

