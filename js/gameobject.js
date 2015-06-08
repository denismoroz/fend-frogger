/*global ctx, gameSettings, Resources */

// Base class for enemy and player objects
var GameObject = function (px, py, sprite) {
    "use strict";
    // Save  begin positions on play board to be able to return object to initial state
    this.beginPositionX = px;
    this.beginPositionY = py;

    this.sprite = sprite;
    this.moveToStart();
};

// Calcuate X position on playboard
GameObject.prototype.getPositionX = function () {
    "use strict";

    return Math.ceil(this.x / gameSettings.getPlayGroundStepX());
};

// Calculate Y position on playboard
GameObject.prototype.getPositionY = function () {
    "use strict";

    return Math.ceil(this.y / gameSettings.getPlayGroundStepX());
};

// Move object to it start position on playboard
GameObject.prototype.moveToStart = function () {
    "use strict";
    this.x = this.beginPositionX * gameSettings.getPlayGroundStepX();
    this.y = this.beginPositionY * gameSettings.getPlayGroundStepY() - 24;
};

GameObject.prototype.render = function () {
    "use strict";
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

GameObject.prototype.update = function (dt) {
    "use strict";
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};