"1 упражнение: Тип вектора"

class Vec{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    plus(vec){
        return new Vec(this.x + vec.x, this.y + vec.y);
    }

    minus(vec){
        return new Vec(this.x - vec.x, this.y - vec.y);
    }

    get length(){
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    }
}

let vec1 = new Vec(3, 15);
let vec2 = new Vec(14, 8);
let vec3 = vec1.plus(vec2);
let vec4 = vec1.minus(vec2);
console.log(vec3); //Vec { x: -11, y: 7 }
console.log(vec4); //Vec { x: 17, y: 23 }
console.log(vec1.length); //15.297058540778355
console.log(vec2.length); //16.1245154965971
console.log(vec3.length); //28.600699292150182
console.log(vec4.length); //13.038404810405298


console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

console.log();
console.log();

"2 упражнение: Группы"

class Group{
    constructor(){
        this.members = [];
    }

    add(value){
        if(!this.has(value)) this.members.push(value);
    }

    delete(value){
        this.members = this.members.filter(x => x != value);
    }

    has(value){
        return this.members.includes(value);
    }

    static from(iterObj){
        let group = new Group;
        for(let element of iterObj){
            if(!group.has(element)) group.add(element);
        }
        return group;
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
group.add(12);
console.log(group.has(12));
// → true
console.log();
console.log();

"3 Упражнение: Итерируемые группы"

class Group1{
    constructor(){
        this.members = [];
    }

    add(value){
        if(!this.has(value)) this.members.push(value);
    }

    delete(value){
        this.members = this.members.filter(x => x != value);
    }

    has(value){
        return this.members.includes(value);
    }

    static from(iterObj){
        let group = new Group1;
        for(let element of iterObj){
            if(!group.has(element)) group.add(element);
        }
        return group;
    }

    [Symbol.iterator](){
        return new GroupIterator(this);
    }
}

class GroupIterator{
    constructor(group){
        this.group = group;
        this.position = 0;
    }

    next(){
        if(this.position >= this.group.members.length) return {done: true};
        else{
            let res = {value: this.group.members[this.position], done: false}
            this.position++;
            return res;
        }
    }
}


for(let value of Group1.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])){
    console.log(value);
}

/*
1
2
3
4
5
6
7
8
9
10
*/
console.log();
console.log();
"Упражнение 4: Заимствование метода"

let map = {one: true, two: true, hasOwnProperty: true};
console.log(map.hasOwnProperty); //true
console.log(Object.prototype.hasOwnProperty.call(map, "one")); //true
console.log(Object.prototype.hasOwnProperty.call(map, "three")); //false