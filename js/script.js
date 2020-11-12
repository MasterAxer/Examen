function nombres()
{
	document.getElementById('nombre').innerHTML="Jorge Armando López Jaramillo";
	document.getElementById('profesion').innerHTML="Estudiante de 5-A en la ingeniería en Telemática de la Facultad de Telemática";
	document.getElementById('procedencia').innerHTML="Aremería Col | México";
	document.getElementById('carrera').innerHTML="<strong>Carrera:</strong> Ingeniería en Telemática";
	document.getElementById('escuela').innerHTML="<strong>Escuela:</strong> Facultad de Telemática";
	document.getElementById('institucion').innerHTML="<strong>Institución:</strong> Universidad de Colima";
}
function frutas()
{
	var x=prompt("Elige la categoría de frutas:\n1.-Dulces\n2.-Acidas\n3.-Neutras");
	var array=[];
	if(x=="Dulces"||x=="dulces")
	{
		var n=prompt("Ingresa el número de frutas a ingresar:");
		document.getElementById("label").innerHTML="Cátalogo de <strong>frutas dulces</strong>";
		for(var i=1;i<=n;i++)
		{
			array=prompt("Dime el nombre de la fruta "+ i);
			document.getElementById("lista").innerHTML+="<li>"+array+"</li>"
		}

	}
	if(x=="Acidas"||x=="acidas")
	{
		var n=prompt("Ingresa el número de frutas a ingresar:");
		document.getElementById("label").innerHTML="Cátalogo de <strong>frutas acidas</strong>";
		for(var i=1;i<=n;i++)
		{
			array=prompt("Dime el nombre de la fruta "+ i);
			document.getElementById("lista").innerHTML+="<li>"+array+"</li>"
		}
	}
	if(x=="Neutras"||x=="neutras")
	{
		var n=prompt("Ingresa el número de frutas a ingresar:");
		document.getElementById("label").innerHTML="Cátalogo de <strong>frutas neutras</strong>";
		for(var i=1;i<=n;i++)
		{
			array=prompt("Dime el nombre de la fruta "+ i);
			document.getElementById("lista").innerHTML+="<li>"+array+"</li>"
		}
	}
}
function verInfo()
{
	document.getElementById('info').style.display="block";
}
function opcion(opt)
{
	console.log(opt);
	switch(opt)
	{
		case 1:
			var contenido=document.getElementById('ficha');
			contenido.style.background="lightblue";
			break;
		case 2:
			var procesos=document.getElementById('procesos');
			procesos.style.background="lightyellow";
			break;
		case 3:
			var relleno=document.getElementById('relleno');
			relleno.style.background="lightgreen";
			break;
	}
}