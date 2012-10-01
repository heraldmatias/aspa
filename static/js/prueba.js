
function callback(data){        
        var noticias = $('#andina');
        var contenido = '';
//	noticias.css('background-color','green');
        $.each(data, function(key,value){
		contenido = contenido + noticia(key,value['titular'],value['texto'],value['link']);
	});
        noticias.html("<div class='accordion' id='noticias-andina'>"+contenido+"</div>");
}

function noticia(num,titulo, texto, link){
var nota= "<div class='accordion-group'> <div class='accordion-heading'> <a class='accordion-toggle'  data-toggle='collapse' data-parent='#noticias-andina' href='#noticia"+num+"'>"+ titulo +" </a> </div>  <div style='height: 0px;' id='noticia"+num+"' class='accordion-body collapse'>  <div class='accordion-inner'><div class='texto'>"+texto+"</div><br /><a class='btn btn-inverse enlace' href='"+link+"' target='_blank'>Leer Noticia completa</a></div></div></div>";
return nota;
}

function jsonp(url){  
    var head = document.getElementsByTagName('head')[0];  
    var script = document.createElement('script');  
    script.type = 'text/javascript';  
    script.src = url;  
    head.appendChild(script);  
    $('#andina').html("");
    $('#andina').html("<img src='static/img/ajax-loader.gif' title='Cargando noticias'><div class='texto'>Cargando</div>");
} 
/*
$.each(data, function(key,value){                
			noticias.append(key);
		});*/

