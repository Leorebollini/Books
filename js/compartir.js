'use strict'

$(document).ready(function(){
	$("#form").submit(function(){
		var libro = $("#libro").val();
		var autor = $("#autor").val();
		var destino = $("#destino").val();
		var asunto = $("#asunto").val();
		var mensaje = $("#mensaje").val();
		var body = "El autor es: " + autor + "\n El libro se llama: " + libro + "\n " + mensaje;

    	document.location.href = "mailto:"+destino+"?subject="+asunto+""
        + "&body=" + encodeURIComponent(body);	
	});
});