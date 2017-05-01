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
		