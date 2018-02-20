function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var a;
	var promedio;
	
	
		while(contador<5)
		{
			contador++;
			a=prompt("ingresar los numeros: ");
			a=parseInt(a);
			acumulador=acumulador+a;
		}

promedio=acumulador/contador;
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN