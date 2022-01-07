var world = [
    [4,2,2,2,2,2,2,2,2,2,2,2,2,12,12,2,2,2,2,2,2,2,2,2,2,2,2,5],
    [3,1,1,1,1,1,1,1,1,1,1,1,1,10,11,1,1,1,1,1,1,1,1,1,1,1,1,3],
    [3,1,4,12,12,5,1,4,12,12,12,5,1,10,11,1,4,12,12,12,5,1,4,12,12,5,1,3],
    [3,1,6,13,13,7,1,6,13,13,13,7,1,10,11,1,6,13,13,13,7,1,6,13,13,7,1,3],
    [3,1,1,1,1,1,1,1,1,1,1,1,1,6,7,1,1,1,1,1,1,1,1,1,1,1,1,3],
    [3,1,8,2,2,9,1,4,5,1,1,1,1,1,1,1,1,1,1,4,5,1,8,2,2,9,1,3],
    [3,1,1,1,1,1,1,10,11,1,8,2,2,12,12,2,2,9,1,10,11,1,1,1,1,1,1,3],
    [6,2,2,2,2,5,1,10,11,1,1,1,1,10,11,1,1,1,1,10,11,1,4,2,2,2,2,7],
    [0,0,0,0,0,3,1,10,0,2,9,1,1,6,7,1,1,8,2,0,11,1,3,0,0,0,0,0],
    [0,0,0,0,0,3,1,10,11,1,1,1,1,1,1,1,1,1,1,10,11,1,3,0,0,0,0,0],
    [0,0,0,0,0,3,1,10,11,1,4,2,9,12,12,8,2,5,1,10,11,1,3,0,0,0,0,0],
    [2,2,2,2,2,7,1,6,7,1,3,0,0,0,0,0,0,3,1,6,7,1,6,2,2,2,2,2],
    [14,0,0,0,0,0,1,1,1,1,3,0,0,0,0,0,0,3,1,1,1,1,0,0,0,0,0,15],
    [2,2,2,2,2,5,1,4,5,1,3,0,0,0,0,0,0,3,1,4,5,1,4,2,2,2,2,2],
    [0,0,0,0,0,3,1,10,11,1,6,2,2,2,2,2,2,7,1,10,11,1,3,0,0,0,0,0],
    [0,0,0,0,0,3,1,10,11,1,1,1,1,1,1,1,1,1,1,10,11,1,3,0,0,0,0,0],
    [0,0,0,0,0,3,1,10,11,1,8,2,2,12,12,2,2,9,1,10,11,1,3,0,0,0,0,0],
    [4,2,2,2,2,7,1,6,7,1,1,1,1,10,11,1,1,1,1,6,7,1,6,2,2,2,2,5],
    [3,1,1,1,1,1,1,1,1,1,1,1,1,6,7,1,1,1,1,1,1,1,1,1,1,1,1,3],
    [3,1,8,2,12,5,1,8,2,2,2,9,1,1,1,1,8,2,2,2,9,1,4,12,2,9,1,3],
    [3,1,1,1,10,11,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,10,11,1,1,1,3],
    [10,2,9,1,10,11,1,1,1,1,8,2,2,12,12,2,2,9,1,1,1,1,10,11,1,8,2,11],
    [3,1,1,1,6,7,1,4,5,1,1,1,1,10,11,1,1,1,1,4,5,1,6,7,1,1,1,3],
    [3,1,1,1,1,1,1,10,11,1,1,1,1,6,7,1,1,1,1,10,11,1,1,1,1,1,1,3],
    [3,1,8,2,2,2,2,13,13,2,2,9,1,1,1,1,8,2,2,13,13,2,2,2,2,9,1,3],
    [3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3],
    [6,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,7]
];

var pacman = {
    x: 1,
    y: 1
}

var ghost1 = {
    x: 12,
    y: 12
}

var ghost2 = {
    x: 15,
    y: 12
}

var ghost3 = {
    x: 14,
    y: 10
}

var enemies = [ghost1, ghost2, ghost3];

var score = 0;

function displayWorld(){
    var output = "";
    for(var i = 0; i < world.length; i++){
        output += "<div class='row'>"
        for(var j = 0; j < world[i].length; j++ ){
            if(world[i][j] == 2){
                output += "<div class='brick'></div>"
            }
            else if(world[i][j] == 3){
                output += "<div class='vertBrick'></div>"
            }
            else if(world[i][j] == 4){
                output += "<div class='topLeftcorner'></div>"
            }
            else if(world[i][j] == 5){
                output += "<div class='topRightcorner'></div>"
            }
            else if(world[i][j] == 6){
                output += "<div class='botLeftcorner'></div>"
            }
            else if(world[i][j] == 7){
                output += "<div class ='botRightcorner'></div>"
            }
            else if(world[i][j] == 8){
                output += "<div class ='leftCorner'></div>"
            }
            else if(world[i][j] == 9){
                output += "<div class ='rightCorner'></div>"
            }
            else if(world[i][j] == 1){
                output += "<div class='coin'></div>"
            }
            else if(world[i][j] == 0){
                output += "<div class='empty'></div>"
            }
            else if(world[i][j] == 10){
                output += "<div class='brickLeft'></div>"
            }
            else if(world[i][j] == 11){
                output += "<div class='brickRight'></div>"
            }
            else if(world[i][j] == 12){
                output += "<div class='brickTop'></div>"
            }
            else if(world[i][j] == 13){
                output += "<div class='brickBot'></div>"
            }
            else if(world[i][j] == 14){
                output += "<div class='teleport'></div>"
            }
            else if(world[i][j] == 15){
                output += "<div class='teleport2'></div>"
            }
        }
        output += "</div>";
    }
    // console.log(output);
    document.getElementById('world').innerHTML = output;
}

function displayPacman(){
    document.getElementById('pacman').style.left = pacman.x*20+"px";
    document.getElementById('pacman').style.top = pacman.y*20+"px";
}

function displayGhost(){
    document.getElementById('ghost1').style.left = ghost1.x*20+"px";
    document.getElementById('ghost1').style.top = ghost1.y*20+"px";
    document.getElementById('ghost2').style.left = ghost2.x*20+"px";
    document.getElementById('ghost2').style.top = ghost2.y*20+"px";
    document.getElementById('ghost3').style.left = ghost3.x*20+"px";
    document.getElementById('ghost3').style.top = ghost3.y*20+"px";

}

function displayScore(){
    document.getElementById('score').innerHTML = score;
}


document.onkeydown = function(a){
    if(a.keyCode == 37){
        if(world[pacman.y][pacman.x-1] == 1 || world[pacman.y][pacman.x-1] == 0 || world[pacman.y][pacman.x-1] == 14){
        pacman.x--;
        }
    }
    else if(a.keyCode == 38){
        if(world[pacman.y-1][pacman.x] == 1 || world[pacman.y-1][pacman.x] == 0){
        pacman.y--;
        }
    }
    else if(a.keyCode == 39){
        if(world[pacman.y][pacman.x+1] == 1 || world[pacman.y][pacman.x+1] == 0 || world[pacman.y][pacman.x+1] == 15){
        pacman.x++;
        }
    }
    else if(a.keyCode == 40){
        if(world[pacman.y+1][pacman.x] == 1 || world[pacman.y+1][pacman.x] == 0){
        pacman.y++;
        }
    }

    if(world[pacman.y][pacman.x] == 1){
        world[pacman.y][pacman.x] = 0;
        score += 10;
        displayScore();
    }

    if(world[pacman.y][pacman.x] == 14){
        pacman.y = 12;
        pacman.x = 26;
    }
    else if(world[pacman.y][pacman.x] == 15){
        pacman.y = 12;
        pacman.x = 1;
    }
    displayWorld();
    displayPacman();
}

function removeGhostcage(){
    world[10][13] = 0
    world[10][14] = 0
}

setTimeout(removeGhostcage, 5000);

function moveEnemies(){
    for(var i = 0; i < enemies.length; i++){
    var x = Math.floor(Math.random()*10);
        if(x<=2){
            if(world[enemies[i].y][enemies[i].x+1] == 1 || world[enemies[i].y][enemies[i].x+1] == 0){
            enemies[i].x++;
            }
        }
        else if(x>=3 && x<6){
            if(world[enemies[i].y+1][enemies[i].x] == 1 || world[enemies[i].y+1][enemies[i].x] == 0){
            enemies[i].y++;            
            }
        }
        else if(x>=6 && x<8){
            if(world[enemies[i].y][enemies[i].x-1] == 1 || world[enemies[i].y][enemies[i].x-1] == 0){
            enemies[i].x--;
            }
        }
        else if(x>=8){
            if(world[enemies[i].y-1][enemies[i].x] == 1 || world[enemies[i].y-1][enemies[i].x] == 0){
            enemies[i].y--;
            }
        }
    }
    displayGhost();
}

function gameLoop(){
    displayScore();
    displayPacman();
    displayWorld();
    displayGhost();
    moveEnemies();
}

setInterval(gameLoop, 1000)