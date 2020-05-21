'use strict'
var maxresult = 10;
var favorito = [];

function favoritos(elemento){
	var cond = true;
	var libros = JSON.parse(localStorage.getItem("favoritos"));
	if(libros !== null){
		favorito = libros.slice();
	}
	$.get("https://www.googleapis.com/books/v1/volumes?q=ISBN:"+elemento, function(response){
		$.each(favorito, function(index, elemento){	
			console.log(elemento);
			if(elemento != null){
				if (response.items[0].id == elemento.id){
					console.log(elemento[index]);
					cond = false;
					alert("No se pudo agregar a favoritos. Puede ser que ya este agregado en favoritos.");
				}
			}
		});
		if(cond == true){
			favorito.push(response.items[0]);
			localStorage.setItem("favoritos",JSON.stringify(favorito));
			alert("se ha agregado a favoritos");
		}
	});
}

$(document).ready(function(){
	$("#myform").submit(function(){
		var filtro = $("#filtro").val();
		var search = $("#book").val();
		var resultado = $("#libreria");
		var link = "compartir.html";

		$.get("https://www.googleapis.com/books/v1/volumes?maxResults="+maxresult+"&q="+filtro+ search, function(response){
			$.each(response.items, function(index, elemento){	
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