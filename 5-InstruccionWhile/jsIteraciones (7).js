function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

	while(respuesta=="si")
	{
		numero=prompt("ingrese el numero: ");
		
		respuesta=prompt("ingrese la respuesta: ");
		
		numero=parseInt(numero);
		contador++;
		acumulador=acumulador+numero;
		

	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN