//preparar e rodar um código
function setup() {
  createCanvas(400, 200);//criar tela
  background("pink");
}

//responsável por desenhar
function draw() {
  stroke("blue");
  fill("red");
  
  if(mouseIsPressed){
    rect(mouseX, mouseY, 40, 40);
  }
}