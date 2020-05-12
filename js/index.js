'use strict'
$(document).ready(function(){
	$("#myform").submit(function(){
		var filtro = $("#filtro").val();
		var search = $("#book").val();
		var resultado = $("#libreria");
		var link = "compartir.html";
		$.get("https://www.googleapis.com/books/v1/volumes?q="+filtro+ search, function(response){
			$.each(response.items, function(index, elemento){	
				console.log(elemento.volumeInfo);
            	resultado.append(      	
                '<article class="libro">' +
                   '<div>' +  
                       	'<img src='+ elemento.volumeInfo.imageLinks.smallThumbnail +'></img><br>' +
                       	'Titulo: '+ elemento.volumeInfo.title +'<br> Autores: '+ elemento.volumeInfo.authors+'</strong>' + '<br> Año de lanzamiento: ' + elemento.volumeInfo.publishedDate +
						'<br><a href='+elemento.volumeInfo.infoLink+' target=_blank><button class="button" style="background-color:#F24B41;">Comprar</button></a>'+
						'<br><a href='+link+'><button class="button">Compartir</button></a>' +   
                   '</div>' +
                '<article>'
            	);
            });

		});
	});
});