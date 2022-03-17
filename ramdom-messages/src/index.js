const messages = [
    'Hola',
    'Ana',
    'Nicolay',
    'Yesica',
    'Diego',
    'Laura',
    'Galeed',
    'Enrique',
    'Luisa',
    'Aaron',
];

const randomMsg = (messages) => {
    const messages = messages[Math.floor(Math.random() * messages.length)];
    console.log(messages);
}

module.exports = { randomMsg };