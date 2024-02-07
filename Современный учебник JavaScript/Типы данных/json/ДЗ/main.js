//1 задание

let user = {
    name: "Василий Иванович",
    age: 35
};

user = JSON.stringify(user);
let newUser = JSON.parse(user);


let room = {
    number: 23
};
    let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
};
room.occupiedBy = meetup;
meetup.self = meetup;
alert(JSON.stringify(meetup, function(key, value){
    return(key != '' && value == meetup) ? undefined : value;
}));