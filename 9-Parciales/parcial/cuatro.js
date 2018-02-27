function Mostrar()
{
var numerouno;
var numerodos;
var resultado;
numerouno=prompt("inrese");
numerodos=prompt("ingrese");
numerouno=parseInt(numerouno);
numerodos=parseInt(numerodos);

if(numerouno==numerodos)
{
resultado=numerouno*numerodos;
document.write(+resultado);  	
}
else
{
	if(numerouno>numerodos)
		{
			resultado=numerouno-numerodos;
			document.write(+resultado);

		}
		else
		{
			resultado=numerouno+numerodos;
			document.write(+resultado);
		}
}
}
