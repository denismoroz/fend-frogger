// Enemies our player must avoid
var Enemy = function(px, py, speed) {
    GameObject.call(this, px, py, 'images/enemy-bug.png');
    this.speed = speed;
}

Enemy.prototype = Object.create(GameObject.prototype);
Enemy.prototype.constructor = Enemy;

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += dt * this.speed;

    // Enemy is out of the right side of the playboard.
    if (this.x > gameSettings.playGroundWidth) {
        this.x = 0;
    }
    // Enemy is out of ther left side of the playboard.
    if (this.x < 0) {
        this.x = gameSettings.playGroundWidth;
    }
}