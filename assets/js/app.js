var regiones = ['Amazonas', 'Áncash', 'Apurímac', 'Arequipa', 'Ayacucho', 'Cajamarca', 'Callao', 'Cuzco', 'Huancavelica', 'Huánuco', 'Ica', 'Junín', 'La Libertad', 'Lambayeque', 'Lima', 'Loreto', 'Madre de Dios', 'Moquegua', 'Pasco', 'Piura', 'Puno', 'San Martín', 'Tacna', 'Tumbes', 'Ucayali'];

	var region = document.getElementById("region");

		for(var i=0; i < regiones.length; i++){
				var opcion = document.createElement('option');
				opcion.innerHTML = regiones[i];
				opcion.value = regiones[i];
				region.appendChild(opcion);
		}

	var residencia = document.getElementById("residencia");
		
		for(var i=0; i < regiones.length; i++){
				var opcion = document.createElement('option');
				opcion.innerHTML = regiones[i];
				opcion.value = regiones[i];
				residencia.appendChild(opcion);
		}

var edades = ['18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40'];

	var edad = document.getElementById("edad");
	
		for(var i=0; i < edades.length; i++){
			var opcion = document.createElement('option');
			opcion.innerHTML = edades[i];
			opcion.value = edades[i];
			edad.appendChild(opcion);
		}