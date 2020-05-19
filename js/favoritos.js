'use strict'

$(document).ready(function(){
	var libros = [];
	var cont = localStorage.length;	
	while(cont != 0){
		if(JSON.parse(localStorage.length) !== null){
			libros.push(JSON.parse(localStorage.getItem(cont)));
		}
		cont -= 1;
	}
	console.log(libros);
	var resultado = $("#libreria");
	$.each(libros, function(index, elemento){
		console.log(elemento);
		if(elemento !== null){
			resultado.append(      	
				'<article class="libro" >' +
				   '<div>' +  
						   '<img src='+ elemento.volumeInfo.imageLinks.smallThumbnail +'></img><br>' +
						   'Titulo: '+ elemento.volumeInfo.title +'<br> Autores: '+ elemento.volumeInfo.authors+'</strong>' + '<br> Año de lanzamiento: ' + elemento.volumeInfo.publishedDate +
						'<br><a href='+elemento.volumeInfo.infoLink+' target=_blank><button class="button" style="background-color:#F24B41;">Comprar</button></a>'+  
						'<br><button class="favbtn" id='+elemento.id+' onClick="eliminarFavs(this.id)">Eliminar de favoritos</button>' + 
				   '</div>' +
				'<article>'
			);
		}
    });
});

function eliminarFavs(id){
	var libro;
	var cont = localStorage.length;
	while(cont != 0){
		libro = JSON.parse(localStorage.getItem(cont));
		console.log(libro)
		if(libro !== null){
			if(libro.id === id){
				localStorage.removeItem(cont)
			}
		}
		cont -= 1;
	}
	window.location.reload(true);
}