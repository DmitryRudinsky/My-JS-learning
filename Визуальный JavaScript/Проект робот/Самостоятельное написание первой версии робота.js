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
        if(graph[from] == null){
            graph[from] = [to];
        }else{
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

class VillageState{
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    move(destination){
        if(!roadGraph[this.place].includes(destination)){
            return this;
        }else{
            let parcels = this.parcels.map(p => {
                if(p.place != this.place){
                    return p;
                }
                return {place: destination, address: p.address};
            }).filter(p => p.place != p.address);
            return new VillageState(destination, parcels);
        }
    }
}

function randomPick(array){
    return array[Math.floor(Math.random() * array.length)];
}

function randomRobot(state){
    return {direction: randomPick(roadGraph[state.place])}
}

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

VillageState.random = function(parcelCount = 5){
    let parcels = [];
    for(let i = 0; i < parcelCount; i++){
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do{
            place = randomPick(Object.keys(roadGraph));
        }while(place == address);
        parcels.push({place, address});
    }
    return new VillageState("Почта", parcels);
};

runRobot(VillageState.random(), randomRobot);