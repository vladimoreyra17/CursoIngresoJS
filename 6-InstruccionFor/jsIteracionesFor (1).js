function Mostrar()
{
	var iteraciones=10;
	var contador=0;
	var par=0;
	var impar=0;
	var cero=0;
	var cantpositivo=0;
	var cantnegativo=0;
	//var iteraciones=10;

	for(contador=-10 ;contador<iteraciones ; contador++ )
	{		
	document.write("<br>" +contador);
		if(contador==0)	
		{
			cero++;			
		}
			
		else
		{
		
		if(contador%2==0)
		{
			par++;
		}	
		 
		 else{
		
			impar++
		}
		if(contador>0)
		{
			cantpositivo++;
		}

			else
			{
				if(contador<0)
				{
					cantnegativo++;
				}
			}
		}

		}	

			
	}
	document.write("<br> cero:" +cero);
	document.write("<br> par: " +par);
	document.write("<br> impar:" +impar);
	document.write("<br> negativo:" +cantnegativo);
	document.write("<br> positivo:" +catpositivo);
}