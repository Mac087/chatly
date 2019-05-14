// Bring in the room class
const Namespace = require('../classes/Namespace');
const Room = require('../classes/Room');
const Message = require('../classes/Message');

//Temp
const avatar = require('../assets/square-1.png');

// Require namespace icons
const astronautIcon = require('../assets/astronaut.svg');
const asteroidIcon = require('../assets/asteroid.svg');

// Set up the namespaces
const namespaces = [];
let astronaut = new Namespace(0, 'Astronaut', astronautIcon, '/astronaut');
let asteroid = new Namespace(1, 'Asteroid', asteroidIcon, '/asteroid');

namespaces.push(astronaut, asteroid);

// Make the main room and add it to rooms. it will ALWAYS be 0
astronaut.addRoom(new Room(0, 'General', 'Astronaut'));
astronaut.addRoom(new Room(1, 'Events', 'Astronaut'));
astronaut.addRoom(new Room(2, 'Random', 'Astronaut'));

asteroid.addRoom(new Room(0, 'General', 'Asteroid'));
asteroid.addRoom(new Room(1, 'Helpful', 'Asteroid'));
asteroid.addRoom(new Room(2, 'Chatter', 'Asteroid'));
asteroid.addRoom(new Room(3, 'Random', 'Asteroid'));

// Add Sample Messages
astronaut.rooms[0].addMessage(new Message(0, 'yolo', avatar, '11:00am', 'Hello this is a test'));
astronaut.rooms[0].addMessage(new Message(1, 'coolio', avatar, '11:00pm', 'Hello this is NOT a test'));

module.exports = namespaces;