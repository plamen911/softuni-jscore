define(['module'], function (module) {
    'use strict';

    // private members
    let playerName = '';

    function logPlayer() {
        console.log(`The current player is ${playerName}.`);
    }

    function setName(newName) {
        playerName = newName;
    }

    function getName() {
        return playerName;
    }

    module.exports = {
        logPlayer,
        setName,
        getName
    };
});
//# sourceMappingURL=player.js.map