define([], function () {
    'use strict';

    define([], function () {

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

        return {
            logPlayer: logPlayer,
            setName: setName,
            getName: getName
        };
    });
});
//# sourceMappingURL=player.js.map