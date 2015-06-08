// GameSettings
var GameSettings = function () {
    'use strict';
    this.PLAYGROUND_WIDTH = 505;
    this.PLAYGROUND_HEIGHT = 606;
    this.PLAYGROUND_NUM_ROWS = 6;
    this.PLAYGROUND_NUM_COLS = 5;
};

GameSettings.prototype.getPlayGroundStepX = function () {
    'use strict';
    return this.PLAYGROUND_WIDTH / this.PLAYGROUND_NUM_COLS;
};

GameSettings.prototype.getPlayGroundStepY = function () {
    'use strict';
    // Playboard is rather strange, sprites are overlapped so Y step is hardcodded.
    return 85;
};