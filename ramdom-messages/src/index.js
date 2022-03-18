const messages = [
    'Ana',
    'Nicolay',
    'Yesica',
    'Diego',
    'Laura',
    'Galeed',
    'Enrique',
    'Luisa',
    'Aaron',
    'Carolina',
    'Paulina',
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };
