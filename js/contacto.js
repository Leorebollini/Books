'use strict'

$(document).ready(function(){
	if (!!navigator.geolocation) {
		var output = document.querySelector("#local");

			// Sirve para extraer la ubicación del usuario
		/* 	function localizacion(posicion){
		 		var latitud = posicion.coords.latitude;
				var longitud =  posicion.coords.longitude;
		 	}
		 	function error(){
		 		output.innerHTML ="<p> No se pudo obtener la ubicación</p>";
		 	}
		  	navigator.geolocation.getCurrentPosition(localizacion,error);*/

	}else {
	  document.getElementById("local").innerHTML = "Lo sentimos, tu navegador no soporta la geolocation.";
	}
});