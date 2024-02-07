let user = {
    name: "Jhon",
    money: 1000,
    [Symbol.toPrimitive](hint){
        alert(`hint: ${hint}`);
        return hint == "string" ? `name: ${this.name}` : this.money; 
    }
}

alert(user);
alert(+user);
alert(user + 500);