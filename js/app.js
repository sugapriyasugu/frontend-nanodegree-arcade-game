
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
            player.reset();
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
    // resets the player position 
    reset() {
        this.x = 202;
        this.y = 410;
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

    // handle input functionality which receives user inputs and moves the player accordingly
    handleInput(keyPress) {
        switch (keyPress) {
            case 'left':
                this.x -= this.speed + 50;
                break;
            case 'up':
                this.y -= this.speed + 30;
                break;
            case 'right':
                this.x += this.speed + 50;
                break;
            case 'down':
                this.y += this.speed + 30;
                break;
        }
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

let player = new Player(202, 410, 55);
let allEnemies = [];
let enemyPosition = [63, 145, 227];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});

enemyPosition.forEach(posY => {
    allEnemies.push(new Enemy(0, posY, 80+ Math.floor(Math.random() * 512)));
});

