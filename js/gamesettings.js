
// GameSettings
var GameSettings = function() {
    this.playGroundWidth = 505;
    this.playGroundHeight = 606;
    this.playGroundNumRows = 6;
    this.playGroundNumCols = 5;
};

GameSettings.prototype.getPlayGroundStepX = function () {
    return this.playGroundWidth / this.playGroundNumCols;
};

GameSettings.prototype.getPlayGroundStepY = function () {
    // Playboard is rather strange, sprites are overlapped so Y step is hardcodded.
    return 85;
};