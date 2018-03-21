		
	
function includeHTML() {
		  var z, i, elmnt, file, xhttp;
		  /*loop through a collection of all HTML elements:*/
		  z = document.getElementsByTagName("*");
		  for (i = 0; i < z.length; i++) {
			elmnt = z[i];
			/*search for elements with a certain atrribute:*/
			file = elmnt.getAttribute("w3-include-html");
			if (file) {
			  /*make an HTTP request using the attribute value as the file name:*/
			  xhttp = new XMLHttpRequest();
			  xhttp.onreadystatechange = function() {
				if (this.readyState == 4) {
				  if (this.status == 200) {elmnt.innerHTML = this.responseText;}
				  if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
				  /*remove the attribute, and call this function once more:*/
				  elmnt.removeAttribute("w3-include-html");
				  includeHTML();
				}
			  } 
			  xhttp.open("GET", file, true);
			  xhttp.send();
			  /*exit the function:*/
			  return;
			}
		  }
		}
  
$(function Trial() {
       $.ajax({
       url: 'http://barchezalphonse.fr/requetes/produits.php',
       dataType: 'json',
	   contentType: "application/json; charset=utf-8",
       success: function(data) {
         
		var code = "<div class='w3-col s12 m12 w3-display-container'>";	
		var nom = JSON.parse(data.nomP);
		var description = JSON.parse(data.description);
		var nbstring = data.nbDescription;
		var nb = num = parseFloat(nbstring) || 0;
		
		for (i=0;i<nb;i++) 
		{
			code += "<div class='w3-card w3-grey' style='width:100%'>";
				code += "<img src='img/TEST2.png' alt='Lights' style='width:100%'>";
				code += "<div class='w3-container w3-grey'>";
					code += nom[i];
					code += "</br>"; 
					code += description[i];
				code += "</div>"; 
			code += "</div> <br>"; 
		}
		code += "</div>"; 
		
		//alert('avant');	
		document.getElementById('evenement').innerHTML += code;
		//alert('apres');	
		document.getElementById('trial').innerHTML += code;
			

       },
      statusCode: {
         404: function() {
           alert('There was a problem with the server.  Try again soon!');
         }
       }
    });
  }); 
  
$(function Blonde() {
       $.ajax({
       url: 'http://barchezalphonse.fr/requetes/produits.php',
       dataType: 'json',
	   contentType: "application/json; charset=utf-8",
       success: function(data) {
         
		var code = "<div class='w3-col s12 m12 w3-display-container'>";	
		var nom = JSON.parse(data.nomP);
		var description = JSON.parse(data.description);
		var nbstring = data.nbDescription;
		var nb = num = parseFloat(nbstring) || 0;
		
		for (i=0;i<nb;i++) 
		{
			code += "<div class='w3-card w3-grey' style='width:100%'>";
				code += "<img src='img/TEST2.png' alt='Lights' style='width:100%'>";
				code += "<div class='w3-container w3-grey'>";
					code += nom[i];
					code += "</br>"; 
					code += description[i];
				code += "</div>"; 
			code += "</div> <br>"; 
		}
		code += "</div>"; 
			
		document.getElementById('blonde').innerHTML += code;	

       },
      statusCode: {
         404: function() {
           alert('There was a problem with the server.  Try again soon!');
         }
       }
    });
  }); 
  
  
$(function Trial() {
	//Connexion a la page ou il y a les informations.
       $.ajax({
       url: 'http://barchezalphonse.fr/requetes/image_produit.php',
       dataType: 'json',
	   contentType: "application/json; charset=utf-8",
       success: function(data) {
         
	//Ouvre la div avec la mise en forme	 
		var code = "<div class='w3-col s12 m12 w3-display-container'>";	
	//Recupere le nom des boissons 	
		var nom = JSON.parse(data.nomP);
	//Recupere la photo des boissons	
		var img = JSON.parse(data.photoP);
	//Recupere la description des boissons	
		var description = JSON.parse(data.description);
	//Pays 	
		var pays = JSON.parse(data.paysP);
	//Degree	
		var degres  = JSON.parse (data.degreP);
		var nbstring = data.nbDescription;
		var nb = num = parseFloat(nbstring) || 0;
	//Recupere juste le nombre de produit pour faire le fetch
		
		for (i=1;i<nb;i++) 
		{   //l'image a partir du code base 64
			theimage = "<img src='data:image/jpeg;base64,"+img[i]+"' alt='image'  class='w3-image'>";
			
			//L element en dessous de l image
			code += "<div class='w3-card w3-grey' style='width:100%'>";	
				code += theimage;	//Place l'image		
				code += "<div class='w3-container w3-grey'>";
					//Le nom du produit
					code += "<div class='w3-container w3-center w3-opacity '>";
						code += "<h3>"+ nom[i] + "</h3>";
					code += "</div>";
					//Le pays
					code += "<b> Pays : </b>";
					code += pays[i];
					//Les degres
					code += "</br>"; 
					code += "<b> Degres : </b>";
					code += degres[i];
					//Les description
					code += "</br>"; 
					code += "<b> Description : </b>";
					code += description[i];
				code += "</div>"; 
			code += "</div> <br>";
			
		}
		code += "</div>"; 
		
		//Envoye le script html pour ces element a l id Image
		document.getElementById('image').innerHTML += code;
       },
      statusCode: {
         404: function() {
           alert('There was a problem with the server.  Try again soon!');
         }
       }
    });
  }); 
  

  
  
  