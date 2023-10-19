let calculator = {
    read() {
        this.a = +prompt("a?", 0);
        this.b = +prompt("b?", 0);
    },
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );