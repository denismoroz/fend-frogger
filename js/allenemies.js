// Wrapper arround enemies array. It will help to manage them.
var AllEnemies = function () {
    this.enemies = [];
}

AllEnemies.prototype.render = function() {
    this.enemies.forEach(function(enemy) {
        enemy.render();
    });
}

AllEnemies.prototype.update = function(dt) {
    this.enemies.forEach(function(enemy) {
        enemy.update(dt);
    });
};

// Random int gerator to place enemies randomly
// Taken from: http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range
AllEnemies.prototype.getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

AllEnemies.prototype.add = function() {
    this.enemies.push(new Enemy(this.getRandomInt(0, 4),
        this.getRandomInt(1, 3) ,
        this.getRandomInt(50, 300)));
};

AllEnemies.prototype.reset = function() {
    this.enemies = [];
    this.add();
};

// Collision detection with game object.
// Calculate position of the object on playboard and compare it with enemies objects.
AllEnemies.prototype.checkCollisions = function(object) {
    var objectPosX = object.getPositionX();
    var objectPosY = object.getPositionY();
    var collistionDetected = false;
    this.enemies.forEach(function(enemy) {
        var x = enemy.getPositionX();
        var y = enemy.getPositionY();
        if ((x == objectPosX) && (y == objectPosY)) {
            collistionDetected = true;
        }

    });
    return collistionDetected;
};