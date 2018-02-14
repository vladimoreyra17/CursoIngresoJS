function Mostrar()
{
	var edad;
	var estadocivil;
	
	

	edad=document.getElementById('edad').value; 
	estadocivil=document.getElementById('estadoCivil').value;


	if(edad<18 && estadocivil != "Soltero")
	{
		console.log("NO HACER NADA ");

	}
		else
		{
			if(edad>17 && estadocivil =="Soltero")
			{
				alert("Es soltero y no es menor");

			}
			alert("Vamos la proxima se puede");
		}
       
       

	



}//FIN DE LA FUNCIÓN