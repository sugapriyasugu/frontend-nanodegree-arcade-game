
// Enemies our player must avoid
class Enemy {
    constructor(x, y, speed) {
        // Variables applied to each of our instances go here,
        // we've provided one for you to get started
        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.sprite = 'images/enemy-bug.png';
        // initial co-ordinates
        this.x = x;
        this.y = y;
        // speed of the enemy
        this.speed = speed;
    }
}
