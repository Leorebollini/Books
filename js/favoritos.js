'use strict'
$(document).ready(function(){
	var libros = [];
	var cont = localStorage.getItem('cont');	
	while(cont != 0){
		libros.push(JSON.parse(localStorage.getItem(cont)));
		cont -= 1;
	}
	console.log(libros);
	var resultado = $("#libreria");
	$.each(libros, function(index, elemento){	
		console.log(elemento);
    	resultado.append(      	
        '<article class="libro" >' +
           '<div>' +  
               	'<img src='+ elemento.volumeInfo.imageLinks.smallThumbnail +'></img><br>' +
               	'Titulo: '+ elemento.volumeInfo.title +'<br> Autores: '+ elemento.volumeInfo.authors+'</strong>' + '<br> Año de lanzamiento: ' + elemento.volumeInfo.publishedDate +
				'<br><a href='+elemento.volumeInfo.infoLink+' target=_blank><button class="button" style="background-color:#F24B41;">Ver</button></a>'+  
           '</div>' +
        '<article>'
    	);
    });
});