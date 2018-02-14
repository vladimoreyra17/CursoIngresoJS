/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var a;
	var b;
	var resultado;

	a=document.getElementById('numeroUno').value;
	b=document.getElementById('numeroDos').value;
		a=parseInt(a);
				b=parseInt(b);
					resultado=a+b;
					alert("La Suma es: "+resultado);
}

function restar()
{
	var a;
	var b;
	var resultado;

	a=document.getElementById('numeroUno').value;
	b=document.getElementById('numeroDos').value;
		a=parseInt(a);
				b=parseInt(b);
					resultado=a-b;
					alert("la Resta es: "+resultado);
	
}

function multiplicar()
{ 
var a;
	var b;
	var resultado;

	a=document.getElementById('numeroUno').value;
	b=document.getElementById('numeroDos').value;
		a=parseInt(a);
				b=parseInt(b);
					resultado=a*b;
					alert("el Producto: "+resultado);	
}

function dividir()
{
	var a;
	var b;
	var resultado;

	a=document.getElementById('numeroUno').value;
	b=document.getElementById('numeroDos').value;
		a=parseInt(a);
				b=parseInt(b);
					resultado=a/b;
					alert("el resultado es: "+resultado);
	
}

