function Mostrar()
{
	var nota;
    
	nota=Math.floor(Math.random()*10)+1;
//Genero el número RANDOM entre 1 y 10 
	if(nota>8)
	{
			alert("EXCELENTE "+nota);		
	}
	else
	{
		if(nota>=4)
		{
			alert("APROBO "+nota);
		}
		else
		{
			alert("Vamos,la proxima se puede "+nota);
		}
		
	}

		


}//FIN DE LA FUNCIÓN