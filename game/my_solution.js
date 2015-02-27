 // U3.W7: Design your own Code Combat Mission

// This is a solo challenge

// Your mission description:
// Overall mission: hit kanye with the mic
// Goals: grab the mic, hit kanye with it
// Characters: player, kanye
// Objects: player, kanye, mic
// Functions: draw, playerMove, aiMove, houseKeeping

// Pseudocode
// create objects for player, kanye and microphone
// add properties to object for x/y location
// add kanye alive property
// add player moving and micEquip property
// create event listener and map to wasd
// use housekeeping method to contain misc logic

// Refactored code


//if this comment is gone then i broke git plz send help
//initializes canvas1 & canvas2
var a = document.getElementById('canvas');
var b = document.getElementById('canvas2');
var ctx = a.getContext('2d');
var ctx2 = b.getContext('2d');
b.height = 500;
b.width = 1000;
a.height = 500;
a.width = 500;
var dy = 50;
var dx = 50;

//draws to canvas 100 times a second
setInterval(draw, 10)


var kanye = {
	x: 400,
	y: 0,
	alive: true,
}

var mic = {

	x: 250,
	y: 250,
}

var player = {
    x: 0,
    y: 0,
    micEquip: false,
    moving: false,
}

//draws the images onto the html canvas
function draw(){
	ctx.clearRect(0, 0, a.width, a.height)

	ctx.beginPath();
	ctx.drawImage(jay, player.x, player.y, 50, 50)
	ctx.closePath();
	ctx.fill();

	ctx.beginPath();
	ctx.drawImage(img, kanye.x, kanye.y, 50, 50)
	ctx.closePath();
	ctx.fill();

	ctx.beginPath();
	ctx.drawImage(microphone, mic.x, mic.y, 50, 50);
	ctx.closePath();
	ctx.fill();
}

//event listener for wasd input
 window.addEventListener('keydown', playerMove, true);

//moves the player
function playerMove(evt){
	switch (evt.keyCode) {
		case 87:  /* w was pressed */
			if (player.y - dy >= 0){ 
			    player.y -= dy;
			    player.moving = true;
			    houseKeeping()
		}
		break;
		case 83:  /* s was pressed */
			if (player.y + dy < a.height){ 
			    player.y += dy;
			    player.moving = true;
			    houseKeeping()
		}
		break;
		case 65:  /* a was pressed */
			if (player.x - dx >= 0){ 
			    player.x -= dx;
			    player.moving = true;
			    houseKeeping()
		}
		break;
		case 68:  /* d was pressed */
			if (player.x + dx < a.width){ 
			    player.x += dx;
			    player.moving = true;
			    houseKeeping()
		}
		break;
	}
}

//ai movement
function aiMove() {
	var ranNum = Math.floor((Math.random() * 4) + 1)
	if (ranNum == 1){
		if (kanye.y - dy >= 0){
			kanye.y -= dy;
		} else {
			kanye.y = kanye.y
		}
	} else if (ranNum == 2) {
		if (kanye.y + dy < a.height) {
			kanye.y += dy;
		} else {
			kanye.y = kanye.y
		}
	} else if (ranNum == 3) {
		if (kanye.x - dx >= 0) {
			kanye.x -= dx;
		} else {
			kanye.x = kanye.x
		}
	} else {
		if (kanye.x + dx < a.width){
			kanye.x += dx;
		} else {
			kanye.x = kanye.x
		}
	}
}

//regulates micEquip property on player, mic coords when equipped, whether kanye is alive
function houseKeeping() {
	aiMove()

	if (player.moving = true) {
		console.log("player is moving x:" + player.x + " y:" + player.y)
	}	

	if (player.x == mic.x-50 && player.y == mic.y){
		setTimeout(function(){
		alert("you got the mic, now hit kanye with it");
		}, 15);
		player.micEquip = true;
	}

	if (player.micEquip == true) {
		mic.x = player.x + 50
		mic.y = player.y
		console.log("you got the mic")
	}

	if((mic.x == kanye.x) && (mic.y == kanye.y)) {
		setTimeout(function(){
		alert("you hit kanye with the mic, you win")
		}, 15);
		kanye.alive = false
	}

	if (kanye.alive == false){
		shoulder.play()
		ctx2.drawImage(t, 500, 0, 500, 500);
		console.log("you win!")
		kanye.x = 100000
		kanye.y = 100000
		setTimeout(function(){
		clearInterval(refresh)
		}, 15);
	}
}

//loading images and sound file

var shoulder = new Audio("shoulder.mp3") 

img = new Image()
img.src = "kanye.jpg"

jay = new Image()
jay.src = "jay.png"

microphone = new Image()
microphone.src = "mic.jpg"

t = new Image()
t.src = "trophy.gif"


// Reflection
// This challenge was definitely a huge learning experience for me. I feel way more comfortable with JS than I did before
// and I feel that I understand the relation between HTML and JS better than I did before. This challenge took me
// a few days to complete, and I refactored as I went because I was never satisfied with my original code in the state
// that it was in.
//
//
//
//