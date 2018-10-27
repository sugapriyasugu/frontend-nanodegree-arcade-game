
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

    // Update the enemy's position, required method for game
    //  Parameter: dt, a time delta between ticks
    update(dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
        this.x+= (this.speed) * dt;
        // to prevent enemy moving off screen
        if (this.x > 505) {
            this.x = 0;
        }   
        // handles collision with player
        if (player.x < this.x + 60 &&
            player.x + 37 > this.x &&
            player.y < this.y + 25 &&
            30 + player.y > this.y) {
            player.x = 202;
            player.y = 410;
        }
    }
    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
 
}
// Player class
class Player {
    constructor(x, y, speed) {
        // initial co-ordinates
        this.x = x;
        this.y = y;
        // speed of the player
        this.speed = speed;
        // The image/sprite for our player, this uses
        // a helper we've provided to easily load images
        this.sprite = 'images/char-boy.png';
    }

    update() {
        //reset to initial position of player, if the player reaches water level
        if(this.y < 0) {
            this.x = 202;
            this.y = 410;
        }
        // conditions to check and handle to restrict player from moving off screen
        if(this.x < 0) {
            this.x = 0;
        }
        if(this.x > 404) {
            this.x = 404;
        }
        if(this.y > 410) {
            this.y = 410;
        }
    }

    // Draw the player on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}
