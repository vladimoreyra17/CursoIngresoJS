function Mostrar()
{

var importe;
var contador=0;
var iteraciones=6;
var mayor=0;
var menor=9999;

for(contador=0 ;contador<iteraciones; contador++)
{

	
	if(contador>0)
	{
		importe=prompt("Ingrese el importe de las ventas: ");
		importe=parseInt(importe);

		if(importe<menor)
		{
		menor=importe;
		}
		
				if(importe>mayor)
				{
				mayor=importe;
				}
			

	}	
					

}
	prompt("el mayor importe es: "+mayor+" el menor importe es: "+menor);






}
