let dibujo = document.getElementById("canvas");
let  lienzo = dibujo.getContext("2d");

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarArco(color, xCentro, yCentro, radio, angInicial, angFinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.arc(xCentro, yCentro, radio, angInicial, angFinal);
    lienzo.stroke();
    lienzo.closePath();
}

dibujarLinea("black",250,150,250,280);
dibujarLinea("black",200,200,300,200);
dibujarLinea("black",200,200,180,210);
dibujarLinea("black",300,200,320,190);
dibujarLinea("black",250,280,200,310);
dibujarLinea("black",250,280,300,310);
dibujarLinea("black",200,310,200,320);
dibujarLinea("black",300,310,300,320);

dibujarArco("black",250,110,40,1,90);

dibujarArco("black",240,93,3,1,90);
dibujarArco("black",265,93,3,1,90);

lienzo.strokeStyle="black";
lienzo.beginPath();
lienzo.arc(250,120,20,0,Math.PI,false);
lienzo.stroke();
lienzo.font = "20pt Verdana";
lienzo.strokeText("Dibujo",0,20)

    

    
