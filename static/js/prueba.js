function andina_news(){        
        var noticias = $("#noticias");
	$.getJSON('http://50.116.43.119:8070/andina/noticias/json/', function(data){
                $.each(data, function(key,value){                
			noticias.append(key +" = " + value["titular"]);
		});
		
	});
}
/*
$.each(data, function(key,value){                
			noticias.append(key);
		});*/
$(document).ready(function() {
andina_news();
});
