// Bring in the room class
const Namespace = require('../classes/Namespace');
const Room = require('../classes/Room');

// Require namespace icons
const astronautIcon = require('../assets/astronaut.svg');
const asteroidIcon = require('../assets/asteroid.svg');

// Set up the namespaces
const namespaces = [];
let astronaut = new Namespace(0, 'Astronaut', 'https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/103px-Wikipedia-logo-v2.svg.png', '/astronaut');
let mozNs = new Namespace(1, 'Mozilla', 'https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png', '/mozilla');

namespaces.push(astronaut, mozNs);

// Make the main room and add it to rooms. it will ALWAYS be 0
astronaut.addRoom(new Room(0, 'New Articles', 'Wiki'));
astronaut.addRoom(new Room(1, 'Editors', 'Wiki'));
astronaut.addRoom(new Room(2, 'Other', 'Wiki'));

mozNs.addRoom(new Room(0, 'Firefox', 'Mozilla'));
mozNs.addRoom(new Room(1, 'SeaMonkey', 'Mozilla'));
mozNs.addRoom(new Room(2, 'SpiderMonkey', 'Mozilla'));
mozNs.addRoom(new Room(3, 'Rust', 'Mozilla'));

module.exports = namespaces;