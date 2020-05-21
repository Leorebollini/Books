'use strict'

$(document).ready(function(){

	// Recuperar libros

	var libros = [];
	libros.push(JSON.parse(localStorage.getItem("favoritos")));
	

	// Imprimir libros

	var resultado = $("#libreria");
	$.each(libros[0], function(index, elemento){
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


// Quitar de favoritos

function eliminarFavs(id){
	let libro = [];
	libro.push(JSON.parse(localStorage.getItem("favoritos")));
	var cond = true;
	$.each(libro[0], function(index, elemento){
		if (id == elemento.id){
			if(index == 1 || index == 0){
				libro[0].splice(index, 1);
			}else{
				libro[0].splice(index, index-1);
				console.log(libro);
			}
			localStorage.setItem("favoritos", JSON.stringify(libro[0]));
			alert("Se ha quitado de favoritos.");
			return false;
		}
	});
	window.location.reload(true);
}