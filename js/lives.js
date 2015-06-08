/*global ctx, Resources, gameSettings  */

// Lives in the game. Incapsulate Lives handling logic.
var Lives = function (start) {
    "use strict";

    this.start = start;
    this.lives = start;
};

Lives.prototype.isAlive = function () {
    "use strict";

    return this.lives > 0;
};

Lives.prototype.add = function () {
    "use strict";

    this.lives += 1;
};

Lives.prototype.remove = function () {
    "use strict";

    this.lives -= 1;
};

Lives.prototype.render = function () {
    "use strict";

    ctx.drawImage(Resources.get("images/heart.png"), gameSettings.PLAYGROUND_WIDTH - 100, 0);
    ctx.font = "40px Georgia";
    ctx.fillStyle = 'white';
    ctx.textAlign = "center";
    ctx.fillText(this.lives, gameSettings.PLAYGROUND_WIDTH - 50, 100);
};

Lives.prototype.reset = function () {
    "use strict";

    this.lives = this.start;
};