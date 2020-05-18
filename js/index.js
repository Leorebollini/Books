'use strict'
var cont = 0;
function favoritos(elemento){
	cont += 1;
	console.log(elemento);
	$.get("https://www.googleapis.com/books/v1/volumes?q=ISBN:"+elemento, function(response){
		console.log(response.items[0]);
		localStorage.setItem(cont, JSON.stringify(response.items[0]));
		localStorage.setItem("cont", cont);
	});
}

$(document).ready(function(){
	$("#myform").submit(function(){
		var filtro = $("#filtro").val();
		var search = $("#book").val();
		var resultado = $("#libreria");
		var link = "compartir.html";
		$.get("https://www.googleapis.com/books/v1/volumes?q="+filtro+ search, function(response){
			$.each(response.items, function(index, elemento){	
				console.log(elemento);
            	resultado.append(      	
                '<article class="libro" >' +
                   '<div>' +  
                       	'<img src='+ elemento.volumeInfo.imageLinks.smallThumbnail +'></img><br>' +
                       	'Titulo: '+ elemento.volumeInfo.title +'<br> Autores: '+ elemento.volumeInfo.authors+'</strong>' + '<br> Año de lanzamiento: ' + elemento.volumeInfo.publishedDate +
						'<br><a href='+elemento.volumeInfo.infoLink+' target=_blank><button class="button" style="background-color:#F24B41;">Comprar</button></a>'+
						'<br><a href='+link+'><button class="button" style="background-color: lightskyblue;">Compartir</button></a>' + 
						'<br><button class="button" id='+elemento.id+' style="background-color: goldenrod;" onclick="favoritos(this.id)" >Agregar a favoritos</button>' +  
                   '</div>' +
                '<article>'
            	);
            });
		});
	});
});