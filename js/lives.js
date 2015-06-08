// Lives in the game. Incapsulate Lives handling logic.
var Lives = function (start) {
    this.start = start;
    this.lives = start;
};

Lives.prototype.isAlive = function (){
    return this.lives > 0;
};

Lives.prototype.add = function() {
    this.lives += 1;
};

Lives.prototype.remove = function() {
    this.lives -= 1;
};

Lives.prototype.render = function() {
    ctx.drawImage(Resources.get("images/heart.png"), gameSettings.playGroundWidth - 100, 0);
    ctx.font="40px Georgia";
    ctx.fillStyle = 'white';
    ctx.textAlign="center";
    ctx.fillText(this.lives, gameSettings.playGroundWidth - 50, 100);
};

Lives.prototype.reset = function() {
    this.lives = this.start;
};