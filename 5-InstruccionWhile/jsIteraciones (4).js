function Mostrar()
{


	var numero = prompt("ingrese un número entre 0 y 10.");

	//while(!(numero>0 && numero<10))
	while(numero<0 || numero>10)		
	{

		numero = prompt("ingrese un número entre 0 y 10.");	
		
	}

		alert("hola ");
}//FIN DE LA FUNCIÓN