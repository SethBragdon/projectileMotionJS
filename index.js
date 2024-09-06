const canvas = document.getElementById('canvas');

canvas.width = 500;
canvas.height = 500;

const c = canvas.getContext('2d');

// Sprite class
class Sprite
{
    // The constructor allows us to specify how to
    // create a new sprite
    constructor(width, height, posX, posY, xSpeed, ySpeed)
    {
        this.width = width;
        this.height = height;
        this.posX = posX;
        this.posY = posY;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
    }
    
    draw()
    {
        c.fillStyle = 'red';
        c.fillRect(this.posX, this.posY, this.width, this.height);
    }
    
    update()
    {
        this.posX += this.xSpeed;
        this.posY += this.ySpeed;
        
        this.draw();
    }
}

let player = new Sprite(40, 40, 20, 20, 2, 2);

// Create the projectile array before the shoot
// function
let projectiles = [player];

function shoot(xPos, yPos, xSpeed, ySpeed)
{
    let projectile = new Sprite (20, 20, xPos, yPos, xSpeed, ySpeed);
    projectiles.push(projectile);
    
}

function mainLoop()
{
    c.clearRect(0, 0, canvas.width, canvas.height);
    
    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);
    
    for(let i = 0; i < projectiles.length; i++)
    {
        projectiles[i].update();
    }
    
    window.requestAnimationFrame(mainLoop);
}

mainLoop();

window.addEventListener('keydown', (event) => {
    if(event.key == 'b')
    {
        alert('projectile shot');
        shoot(player.posX, player.posY,10, 10);
    }
})