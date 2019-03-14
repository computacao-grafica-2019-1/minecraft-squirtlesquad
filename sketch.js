	function Cabeca(w, h) {
		this.w = w;
		this.h = h;
	
		this.desenha = function(){
		rect(-40,-80,w,h);
		}
	}
	
	function Tronco(w, h) {
		this.w = w;
		this.h = h;
		
		this.desenha_tronco = function() {
			rect(-80, 100, w, h)
		}
	
	}

	function Perna(w, h) {
    this.w = w;
    this.h = h;
    
    this.desenha_perna = function() {
      rect(-(this.w/2), 0, w, h)
    }
  }                         

function BracoEsquerdo(w, h) {
    this.w = w;
    this.h = h;
    
    this.desenha_braco = function() {
      rect(0, -(this.h/2), w, h)
    }
}

function BracoDireito(w, h) {
    this.w = w;
    this.h = h;
    
    this.desenha_braco = function() {
      rect(-this.w, -(this.h/2), w, h)
    }
}
var taxa = -1;
var roda_e = 1;
var roda_d = 1;
var move_e = false;
var move_d = false;

function keyTyped() {
  if (key === 'e') {
    move_e = true;
  }
  if (key === 'd') {
    move_d = true;
  }
}

	
function setup() {
  createCanvas(700, 700);	
}

function draw() {
  background(220);
	const cabeca = new Cabeca(80,80);
	push();
	translate(width/2, 120);
	ellipse(0,0,10);
	cabeca.desenha();
	pop();
	
	const tronco = new Tronco(160,180);
	
	push()
	translate(width/2,40);
	ellipse(0,0,10);
	text("Eu sou o jack", 0,-10);
	tronco.desenha_tronco();
	pop();
  
  const perna_d = new Perna(50, 200);
  push();
  translate(width/2-52.5, height/2-20);
  perna_d.desenha_perna(50, 300)
  ellipse(0,0,10);
  pop();
  
  const perna_e = new Perna(50, 200);
  push();
  translate(width/2+52.5, height/2-20);
  perna_e.desenha_perna(50, 300)
  ellipse(0,0,10);
  pop();
  
  
  const braco_e = new BracoEsquerdo(150, 50);
  push();
  translate(width/2+tronco.w/2 + 10, 165);
  var cont = roda_e * taxa;
  if(move_e){
    rotate(radians(cont));
    if (cont === -65){
      	roda_e = 1;
        move_e = false;
    }
    roda_e++;
  }
  braco_e.desenha_braco(50, 300)
  ellipse(0,0,10);
  pop();
  
  const braco_d = new BracoDireito(150, 50);
  push();
  translate(width/2-tronco.w/2 - 10, 165);
  var cont_d = roda_d * taxa;
  if(move_d){
    rotate(radians(cont_d));
    if (cont_d === -75){
      	roda_d = 1;
        move_d = false;
    }
    roda_d++;
  }
  braco_d.desenha_braco(50, 300)
  ellipse(0,0,10);
  pop();
  
}