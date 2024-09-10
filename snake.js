function setup() {
    createCanvas(640, 500);
    background("yellow");
  }
  
  function draw() {
    
    stroke("purple");
    fill("green");
    //console.log(mouseIsPressed)
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 25, 50);
    }
  }
  