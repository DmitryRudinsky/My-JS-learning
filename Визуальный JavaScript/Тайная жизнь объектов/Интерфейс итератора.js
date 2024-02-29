"Ожидается, что объект, переданный в цикле for/of, будет ИТЕРИРУЕМЫМ."
"Это означает, что у него есть метод Symbol.iterator";
"(значение символа, определённое языком и сохранённое как свойство функции Symbol)"

"При вызове данный метод должен возвращать объект, предоставляющий другой интерфейс - итератор."
"Именно он и выполяет перебор. У итератора есть метод next, возвращающий следующий результат."
"Такой результат должен быть объектом со свойством value, которое содержит следующее значение, если оно есть."
"Также у него должно быть свойство done, являющееся истинным, если результатов больше нет, и ложным в противном случае."

"Обратите внимание, что имена свойств next, value, done представляют собой строки, а не символы."
"Только метод Symbol.iterator, который может добавляться к самым разным объектам, действительно является символом."

"Мы можем использовать этот интерфейс напрямую."

let OkIterator = "OK"[Symbol.iterator]();
console.log(OkIterator);// Object [String Iterator] {}
console.log(OkIterator.next()); //{ value: 'O', done: false }
console.log(OkIterator.next()); //{ value: 'K', done: false }
console.log(OkIterator.next()); //{ value: undefined, done: true }

"Реализуем итерируемую структуру данных. Мы создадим класс матрицы, действующий как двумерный массив."

class Matrix {
    constructor(width, height, element = (x, y) => undefined){
        this.width = width;
        this.height = height;
        this.content = [];
        for(let y = 0; y < height; y++){
            for(let x = 0; x < width; x++){
                this.content[y * width + x] = element(x, y);
            }
        }
    }

    get(x, y){
        return this.content[y * this.width + x];
    }
    set(x, y, value) {
        this.content[y * this.width + x] = value;
    }
}

"Содерживое этого класса хранится в общем массиве элементов размером width * height."
"Элементы хранятся построчно, так что, например, третий элемент пятой строки (с отсчётом индексов от нуля)"
"хранится в позиции 4 * width + 2"

"Функция конструктора принимает ширину, высоту и необязательную функцию содержимого, которая используется для заполнения начальных значений."
"Определены также методы get и set для извлечения и изменения элементов матрицы."

"При переборе элементов матрицы нас обычно интересует положение элементов и сами элементы, поэтому у нас будет итератор,"
"создающий объекты со свойствами x, y и value"

class MatrixIterator {
    constructor(matrix){
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }

    next(){
        if(this.y == this.matrix.height) return {done: true};

        let value = {x: this.x, y: this.y, value: this.matrix.get(this.x, this.y)};
        this.x++;
        if(this.x == this.matrix.width){
            this.x = 0;
            this.y++;
        }
        return {value, done: false};
    }
}

"Класс отслеживает процесс перебора матрицы по её свойствам x и y."
"Метод next начинается с проверки, достигнут ли конец матрицы. Если этого не произошло,"
"он сначала создаёт объект, содержащий текущее значение, а затем изменяет его позицию, при необходимости переходя к следующей строке."

"Настроим итерируемый класс Matrix"

Matrix.prototype[Symbol.iterator] = function(){
    return new MatrixIterator(this);
};

"Теперь мы можем перебирать матрицу в цикле for/of"

let matrix = new Matrix(2, 2, (x, y) => `значение ${x}, ${y}`);
for(let {x, y, value} of matrix){
    console.log(x, y, value);
}
/*
0 0 значение 0, 0
1 0 значение 1, 0
0 1 значение 0, 1
1 1 значение 1, 1
*/

"Ещё один практический пример"

let range1 = {
    from: 1,
    to: 5,
};

range1[Symbol.iterator] = function(){
    return{
        current: this.from,
        last: this.to,
        next(){
            if(this.current <= this.last){
                return{done: false, value: this.current++};
            }
            else{
                return {done: true};
            }
        }
    };
};

for(let num of range1){
    console.log(num); //1, 2, 3, 4, 5
}

let range2 = {
    from: 1, 
    to: 5,

    [Symbol.iterator](){
        this.current = this.from;
        return this;
    },
    
    next(){
        if(this.current <= this.to){
            return {done: false, value: this.current++};
        }else{
            return {done: true};
        }
    }
};

let arr = [];
for(let num of range2){
    console.log(num); //1 2 3 4 5
    arr.push(num);
}

console.log(arr); //[ 1, 2, 3, 4, 5 ]