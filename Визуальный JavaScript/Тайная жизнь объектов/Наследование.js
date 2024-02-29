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

"Предположим, что нам нужна структура данных, подобная Matrix, но такая, которая гарантировала бы, что матрица является"
"симметричной и остаётся таковой. Мы могли бы написать такую структуру данных с нуля, но это потребовало бы повторения кода,"
"очень похожего на тот, что мы уже написали."

"Система прототипов JavaScript позволяет создать новый класс, очень похожий на старый, но с новыми определениями некоторых свойств."
"Прототип нового класса происходит от старого прототипа, но в него можно добавить новое определение - например, для метода set."

"В терминах объектно-ориентированного программирования это называется НАСЛЕДОВАНИЕМ."
"Новый класс наследует свойства и поведение старого класса."

class SymmetricMatrix extends Matrix{
    constructor(size, element = (x, y) => undefined){
        super(size, size, (x, y) => {
            if (x < y) return element(y, x);
            else return element(x, y);
        });
    }
    set(x, y, value) {
        super.set(x, y, value);
        if(x != y){
            super.set(y, x, value);
        }
    }
}


let matrix = new SymmetricMatrix(5, (x, y) => `${x}, ${y}`);
console.log(matrix.get(2, 3)); //3, 2

"Наследование позволяет создавать типы данных, слегка отличающиеся от уже существующих, с относительно небольшими затратами."
"Это фундаментальная часть объектно-ориентированной традиции наряду с инкапсуляцией и полиморфизмом."