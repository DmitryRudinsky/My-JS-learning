"В данной главе наш проект - построить автомат, небольшую программу, которая выполняет задачу в виртуальном мире."
"Наш автомат будет роботом почты доставки, принимающим и отправляющим посылки."

let roads = [
    "Дом Алисы-Дом Боба", "Дом Алисы-Склад",
    "Дом Алисы-Почта", "Дом Боба-Ратуша",
    "Дом Дарии-Дом Эрни", "Дом Дарии-Ратуша",
    "Дом Эрни-Дом Греты", "Дом Греты-Ферма",
    "Дом Греты-Магазин", "Рынок-Ферма",
    "Рынок-Почта", "Рынок-Магазин",
    "Рынок-Ратуша", "Магазин-Ратуша",
]


function buildGraph(edges){
    let graph = Object.create(null);
    function addEdge(from, to){
        if (graph[from] == null){
            graph[from] = [to];
        } else{
            graph[from].push(to);
        }
    }

    for(let [from, to] of edges.map(r => r.split("-"))){
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}

const roadGraph = buildGraph(roads);
/*
[Object: null prototype] {
  'Дом Алисы': [ 'Дом Боба', 'Склад', 'Почта' ],
  'Дом Боба': [ 'Дом Алисы', 'Ратуша' ],
  'Склад': [ 'Дом Алисы' ],
  'Почта': [ 'Дом Алисы', 'Рынок' ],
  'Ратуша': [ 'Дом Боба', 'Дом Дарии', 'Рынок', 'Магазин' ],
  'Дом Дарии': [ 'Дом Эрни', 'Ратуша' ],
  'Дом Эрни': [ 'Дом Дарии', 'Дом Греты' ],
  'Дом Греты': [ 'Дом Эрни', 'Ферма', 'Магазин' ],
  'Ферма': [ 'Дом Греты', 'Рынок' ],
  'Магазин': [ 'Дом Греты', 'Рынок', 'Ратуша' ],
  'Рынок': [ 'Ферма', 'Почта', 'Магазин', 'Ратуша' ]
}
*/

"Функция buildGraph принимает массив рёбер и создаёт для него объект словаря, в котором каждому узлу соответствует массив"
"связанных с ним узлов."

"Сведём состояние деревни к минимальному набору значений, его определяюших."

class VillageState{
    constructor(place, parcels){
        this.place = place;
        this.parcels = parcels;
    }

    move(destination){
        if(!roadGraph[this.place].includes(destination)){
            return this;
        } else{
            let parcels = this.parcels.map(p => {
                if(p.place != this.place) return p;
                return {place: destination, address: p.address}
            }).filter(p => p.place != p.address);
            return new VillageState(destination, parcels);
        }
    }
}


let first = new VillageState("Почта", [{place: "Почта", address: "Дом Алисы"}]);
let next = first.move("Дом Алисы"); //VillageState { place: 'Дом Алисы', parcels: [] }

"Результатом перемещения является доставка посылки, и это отражается в следующем состоянии."
"Но исходное состояние по-прежнему описывает ситуацию, когда робот находится на почте, а посылка не доставлена."


"Поскольку мы хотим, чтобы роботы запоминали какие-то вещи, чтобы составлять и выполнять планы,"
"мы также передаём им их память и позволяем возвращать новую память."

function runRobot(state, robot, memory){
    for(let turn = 0;;turn++){
        if(state.parcels.length == 0){
            console.log(`Выполнено за ${turn} ходов`);
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Переход в направлении ${action.direction}`);
    }
}

function randomPick(array){
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

function randomRobot(state){
    return {direction: randomPick(roadGraph[state.place])};
}

VillageState.random = function(parcelCount = 5){
    let parcels = [];
    for(let i = 0; i < parcelCount; i++){
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do{
            place = randomPick(Object.keys(roadGraph));
        } while(place == address);
        parcels.push({place, address});
    }
    return new VillageState("Почта", parcels);
};

runRobot(VillageState.random(), randomRobot);