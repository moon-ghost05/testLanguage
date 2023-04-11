//Use the mouse and the click on the camera's button to take a photograph
//Use the arrowkeys to change the photo displayed
//Where the mouse drags, hearts will follow
//When the mouse is clicked, the ammount of red changes depending on the mouseX
let x = 1
let y = 0

function setup() {
	createCanvas(500,500)
	frameRate(60)
	background(219,232,237)
	pic = loadImage("amy1.jpeg")
	h = loadImage("heart.png")
	cam = loadImage("cam.png")
}

function draw() {
	if (y == 0) {
	 image(cam,100,100)
	}
	else if(y == 1)  {
		noStroke()
		rect(115,115,270,300)
		image(pic,125,125)
		image(h,mouseX,mouseY)
				if (x == 2) {
				pic = loadImage("amy2.jpeg")
				}
			else if (x == 1) {
				pic = loadImage("amy1.jpeg")
				}
			else if (x == 3) {
				pic = loadImage("amy3.jpeg")
				}
			else if (x <= 1) {
				x = 1
				}
			else if (x == 4) {
				pic = loadImage("amy4.jpeg")
				}
			else if (x == 5) {
				pic = loadImage("emma1.jpeg")
			}
			else if (x == 6) {
				pic = loadImage("emma2.jpeg")
			}
			else if (x == 7) {
				pic = loadImage("emma3.jpeg")
			}
			else if (x == 8) {
				pic = loadImage("emma4.jpeg")
			}
			else if (x == 9) {
				pic = loadImage("g1.jpeg")
			}
			else if (x == 10) {
				pic = loadImage("g2.jpeg")
			}
			else if (x == 11) {
				pic = loadImage("g3.jpeg")
			}
			else if (x == 12) {
				pic = loadImage("g4.jpeg")
			}
			else if (x >= 12) {
				x = 12
			}
	}
	
	}

function keyPressed() {
	
	if (keyCode == RIGHT_ARROW) {
		x = x + 1
		} 
	
	else if (keyCode == LEFT_ARROW) {
		x = x - 1
		}
}

function mouseClicked() {
	background(mouseX,232,237)
	if (mouseX <= 155 && mouseX >= 125 && mouseY <= 275 && mouseY >= 245) {
	y = 1
	}
}






