'use strict'
var maxresult = 10;
var cont = localStorage.length;	

function favoritos(elemento){
	console.log(elemento);
	$.get("https://www.googleapis.com/books/v1/volumes?q=ISBN:"+elemento, function(response){
		console.log(response.items[0]);
		localStorage.setItem(cont, JSON.stringify(response.items[0]));
	});
	cont += 1;
}

$(document).ready(function(){
	$("#myform").submit(function(){
		var filtro = $("#filtro").val();
		var search = $("#book").val();
		var resultado = $("#libreria");
		var link = "compartir.html";

		$.get("https://www.googleapis.com/books/v1/volumes?maxResults="+maxresult+"&q="+filtro+ search, function(response){
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
          /*   Boton ver mas - falta implementación
            if(response.items.length == 10){
            	resultado.append(
            		'<button onclick="vertodos();">Ver más</button>'
            	);
            }*/
		});
	});
});