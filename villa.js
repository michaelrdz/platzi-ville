var vp = document.getElementById("villaPlatzi");
var canvas = vp.getContext("2d");

var nVacas = aleatorio(0, 14);
var nPollos = aleatorio(0, 9);

// KEYBOARD KEY CODE VALUES
var teclas = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};

//DETECT KEY PRESSED BY USER
document.addEventListener("keyup", moveCerdo);

var bg = {
    url: "imgs/tile.png",
    cargaOK: false
}

bg.image = new Image();
bg.image.src = bg.url;
bg.image.addEventListener("load", loadBg);


var vaca = {
    url: "imgs/vaca.png",
    cargaOK: false,
}

vaca.image = new Image();
vaca.image.src = vaca.url;
vaca.image.addEventListener("load", loadVaca);

var pollo = {
    url: "imgs/pollo.png",
    cargaOK: false,
    posX: 0,
    posY: 0
}

pollo.image = new Image();
pollo.image.src = pollo.url;
pollo.image.addEventListener("load", loadPollo);

var cerdo = {
    url: "imgs/cerdo.png",
    cargaOK: false,
    posX: 0,
    posY: 0
}

cerdo.image = new Image();
cerdo.image.src = cerdo.url;
cerdo.image.addEventListener("load", loadCerdo);

function loadBg() {
    bg.cargaOK = true;
    draw();
}

function loadVaca() {
    vaca.cargaOK = true;
    vaca.nVacasX = [];
    vaca.nVacasY = [];
    for(var v=0; v< nVacas; v++){
        vaca.nVacasX[v] = aleatorio(0,6) * 80;
        vaca.nVacasY[v] = aleatorio(0,6) * 80;
    }  
    draw();
}

function loadPollo() {
    pollo.cargaOK = true;
    pollo.nVacasX = [];
    pollo.nVacasY = [];
    for(var v=0; v < nPollos; v++){
        pollo.nVacasX[v] = aleatorio(0,7) * 60;
        pollo.nVacasY[v] = aleatorio(0,7) * 60;
    }  
    draw();
}

function loadCerdo() {
    cerdo.cargaOK = true;
    cerdo.posX = aleatorio(0, 7) * 60;
    cerdo.posY = aleatorio(0, 7) * 60;
    draw();
}

// DRAW ALL ELEMENTS ON CANVAS
function draw(){
    if(bg.cargaOK) {
        canvas.drawImage(bg.image, 0, 0);    
    }
    if(vaca.cargaOK) {
        for(var v=0; v< nVacas; v++){
            canvas.drawImage(vaca.image, vaca.nVacasX[v], vaca.nVacasY[v]);            
        }  
    }
    if(pollo.cargaOK) {
        for(var v=0; v < nPollos; v++){
            canvas.drawImage(pollo.image, pollo.nVacasX[v], pollo.nVacasY[v]);       
        }  
    }
    if(cerdo.cargaOK) {
        canvas.drawImage(cerdo.image, cerdo.posX, cerdo.posY);
    }
}


// MOVE ELEMENT "PIG" ON CANVAS
function moveCerdo(evento){
    var movimiento = 10;
    switch(evento.keyCode) {
        case teclas.LEFT:
            if(cerdo.posX >= 0) {
                cerdo.posX = cerdo.posX - movimiento;
                draw();
            }
            else {
                console.log("Cerdito en el borde de la villa");
            }
            break; 
        case teclas.UP:
            if(cerdo.posY >= 0) {
                cerdo.posY = cerdo.posY - movimiento;
            draw();
            }
            else {
                console.log("Cerdito en el borde de la villa");
            }
            break; 
        case teclas.RIGHT:
            if(cerdo.posX <= 490) {
                cerdo.posX = cerdo.posX + movimiento;
                draw();
            }
            else {
                console.log("Cerdito en el borde de la villa");
            }
            break;
        case teclas.DOWN:
            if(cerdo.posY <= 490) {
                cerdo.posY = cerdo.posY + movimiento;
                draw();
            }
            else {
                console.log("Cerdito en el borde de la villa");
            }
            break;
        default: 
            console.log("tecla no reconocida");
    }    
}

//General GET RANDOM FUNCTION
function aleatorio(min, max){
    var resultado;
    resultado = Math.floor(Math.random()*(max - min +1))+min;
    return resultado;
}

//BASIC GET RANDOM EXAMPLE
/*
var z;
for(var i=0; i<10; i++){
    z = aleatorio(10,40);
    document.write(z+", ");
}*/
