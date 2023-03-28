// Ideas 
// 1. polaroid thing
// 2. Key presses shuffles through pictures of evanescence
// 3. Mouse mvt changes the background
// 4. Mouse click adds stamps
let x = 1


function setup() {
  createCanvas(500,500)
  frameRate(60)
  background(219,232,237)
  pic = loadImage("amy1.jpg")
  h = loadImage("heart.png")
}

function draw() {
  noStroke()
  rect(115,115,270,300)
  image(pic,125,125)
  
  
  if (x == 2) {
    pic = loadImage("amy2.jpg")
    }
  else if (x == 1) {
    pic = loadImage("amy1.jpg")
    }
  else if (x == 3) {
    pic = loadImage("amy3.jpg")
    }
  else if (x <= 1) {
    x = 1
    }
  else if (x == 4) {
    pic = loadImage("amy4.jpg")
    }
  else if (x == 5) {
    pic = loadImage("emma1.jpg")
  }
  else if (x == 6) {
    pic = loadImage("emma2.jpg")
  }
  else if (x == 7) {
    pic = loadImage("emma3.jpg")
  }
  else if (x == 8) {
    pic = loadImage("emma4.jpg")
  }
  else if (x == 9) {
    pic = loadImage("g1.jpg")
  }
  else if (x == 10) {
    pic = loadImage("g2.jpg")
  }
  else if (x == 11) {
    pic = loadImage("g3.jpg")
  }
  else if (x == 12) {
    pic = loadImage("g4.jpg")
  }
  else if (x >= 12) {
    x = 12
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
  image(h,mouseX,mouseY)
}
