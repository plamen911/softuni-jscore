// private members
let playerName = '';

export function logPlayer() {
    console.log(`The current player is ${playerName}.`);
}

export function setName(newName) {
    playerName = newName;
}

export function getName() {
    return playerName;
}
//cc