function Mostrar()
{
	var largo=document.getElementById('alrgo').value;
	var ancho=document.getElementById('ancho').value;
	var perimetro;

 	perimetro=(largo*2+ancho*2)*3;
 	alert("Necesita el total de: "+perimetro+" para alambrar.");
}
