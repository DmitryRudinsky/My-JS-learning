// 1 задание

let dictionary = Object.create(null, {
    toString: {
        value(){
            return Object.keys(this).join();
        }
    }
});


dictionary.apple = "Apple";
dictionary.__proto__ = "test";

for(let key in dictionary) {
    alert(key); // "apple", затем "__proto__"
}
alert(dictionary);