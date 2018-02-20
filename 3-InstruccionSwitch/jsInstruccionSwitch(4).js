function Mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;
	
	switch(mes)
	{
		case"Febrero":
		alert("Este mes tiene 28 días");
		break;

		case "" :
		alert("Este mes tiene 30 Días.");
		break;

		default :
		alert("Este mes tiene 31 días.");
		

	}

//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN