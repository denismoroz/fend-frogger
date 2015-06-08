/*global GameObject, gameSettings */

// Main actor of the game.
var Player = function (px, py) {
    "use strict";
    GameObject.call(this, px, py, 'images/char-boy.png');
};

Player.prototype = Object.create(GameObject.prototype);
Player.prototype.constructor = Player;

Player.prototype.handleInput = function (key) {
    "use strict";

    var rightBorder = gameSettings.PLAYGROUND_WIDTH - gameSettings.getPlayGroundStepX();

    // 34 is a magic number calculated to put player in center of cell.
    var bottomBorder = gameSettings.PLAYGROUND_HEIGHT - gameSettings.getPlayGroundStepY() * 2 - 34;

    switch (key) {
    case 'left':
        this.x -= gameSettings.getPlayGroundStepX();

        // if Player is near left border of the playboard.
        if (this.x < 0) {
            this.x = 0;
        }
        break;
    case 'right':
        this.x += gameSettings.getPlayGroundStepX();

        // if Player is near right border of the playboard.
        if (this.x > rightBorder) {
            this.x = rightBorder;
        }
        break;
    case 'up':
        this.y -= gameSettings.getPlayGroundStepY();

        // if Player is near up  border of the playboard.
        if (this.y < 0) {
            this.y = -24;
        }
        break;
    case 'down':
        this.y += gameSettings.getPlayGroundStepY();

        // if Player is near bottom border of the playboard.
        if (this.y > bottomBorder) {
            this.y = bottomBorder;
        }
        break;
    }
};