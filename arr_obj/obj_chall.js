let house = {
    rooms: [
        {
            name: "bedroom",
            doors: 3,
            windows: 4,
            flooring: "carpet",
            current_occupants: []
        },
        {
            name: "bathroom",
            doors: 2,
            windows: 0,
            flooring: "tile",
            current_occupants: []
        },
        {
            name: "kitchen",
            doors: 0,
            windows: 2,
            flooring: "hardwood",
            current_occupants: []
        }
    ],
    people: [
        {
            name: "Jackie",
            age: 29
        },
        {
            name: "Emily",
            age: 29
        },
        {
            name: "Ten",
            age: 25
        }
    ]
}

// 1
console.log(house.rooms[1].name); // bath
console.log(house.rooms.map(room => room.name)); // ["bedroom", "bath", "kitchen"]


house.rooms[2].current_occupants = house.people
console.log(house.rooms[2]);