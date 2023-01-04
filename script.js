var directions = {
    IDLE: 0,
    UP: 1,
    DOWN: 2,
    LEFT: 3,
    RIGHT:4
};

var rounds = [5, 5, 3, 3, 2];

var ball = {
    new: function(incrementedSpeed) {
        return {
            width: 18,
            height: 18,
        }
    }
}