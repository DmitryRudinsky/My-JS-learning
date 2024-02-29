"Иногда полезно знать, является ли объект производным от определённого класса."
"Для этого в JS существует бинарный оператор instanceof."

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



console.log(new SymmetricMatrix(2) instanceof SymmetricMatrix); //true
console.log(new SymmetricMatrix(2) instanceof Matrix); //true
console.log(new Matrix(2, 2) instanceof SymmetricMatrix); //false
console.log([1] instanceof Array); //true

"Оператор просматривает унаследованные типы, так что SymmetricMatrix для него является экземпляром Matrix."
"Оператор также может быть применён к стандартным конструкциям, таким как Array."
"Почти каждый объект представляет собой экземпляр Object."
