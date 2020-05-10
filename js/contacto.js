'use strict'

$(document).ready(function(){
	if (!!navigator.geolocation) {
	  var map;
	  var mapOptions = {
	  	zoom: 15,
	  	mapTypeId: google.maps.MapTypeId.ROADMAP
	  };
	  maps = new google.maps.Map(document.getElementById("local"), mapOptions);
	  navigator.geolocation.getCurrentPosition(function(position){ // Metodo para sacar la ubicación del usuario
	  	var locacion = new google.maps.LatLng(-34.9214516, -57.9545288); // Coordenadas de la catedral de la plata
	  	var ubicacion = new google.maps.InfoWindow({
	  		map: Smap,
	  		position: locacion,
	  		content:
	  		'<h2>Nuestra ubicación</h2>'
	  	});
	  	map.setCenter(locacion);
	  });
	  
	 
	}else {
	  document.getElementById("local").innerHTML = "Lo sentimos, tu navegador no soporta la geolocation.";
	}
});