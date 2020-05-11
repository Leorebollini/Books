'use strict'
$(document).ready(function(){
	$("#myform").submit(function(){
		var filtro = $("#filtro").val();
		var search = $("#book").val();
		var resultado = $("#libreria");
		var cont = 0;
		$.get("https://www.googleapis.com/books/v1/volumes?q="+ search, function(response){
			$.each(response.items, function(index, elemento){	
				if(cont != 10){
					console.log(elemento.volumeInfo);
                	resultado.append(      	
                    '<article class="libro">' +
                       '<div>' +  
	                       '<img src='+ elemento.volumeInfo.imageLinks.smallThumbnail +'></img><br>' +
	                       'Titulo: '+ elemento.volumeInfo.title +'<br> Autores: '+ elemento.volumeInfo.authors+'</strong>' + '<br> Año de lanzamiento: ' + elemento.volumeInfo.publishedDate +
                       '</div>' +
                    '<article>'
                	);
                	cont+= 1;
				}else{
					return false;
				}	
            });

		});
	});
});