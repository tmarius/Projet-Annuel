// /* function loginUser() {
	// var login = $("#login").val();
	// var password = $("#password").val();
	////Returns successful data submission message when the entered information is stored in database.
	// var dataString = 'email=' + login + ' &password=' + password;
	// if (login == '' || password == '')
	// {
    // var divToDisplay = 'loginResults.html #warn';
    // $('#result').load(divToDisplay);
	// }
	// else
	// {
		////AJAX code to submit form.
		// $.ajax({
			// type: "POST",
			// headers:{'Access-Control-Allow-Origin': '*'},
			// url: "http://barchezalphonse.fr",
			// data: dataString,
			// dataType : 'json',
			// cache: false,
			// success: function(response)
			// {
				// if (response.result === 'success')
				// {
					// if(sessionStorage != undefined)
					// {
						// sessionStorage.setItem("user", response.user);
					////	document.getElementById('boisson').innerHTML = response.description;
						// window.location="trial.html";
					// }
				// }
				// else
				// {
					// var divToDisplay = 'loginResults.html #'+response.result;
					// $('#result').load(divToDisplay);
				// }
			// },
			// error : function(error)
			// {
        // var divToDisplay = 'loginResults.html #error';
				// $('#result').load(divToDisplay);
			// }
		// });
	// }
// } */


// $(function boby() {  
  // $('#clickme').click(function() {
       // $.ajax({
       // url: 'http://barchezalphonse.fr',
       // dataType: 'json',
       // success: function(data) {
          // var items = [];

          // $.each(data, function(key, val) {

            // items.push('<li id="' + key + '">' + val + '</li>');    
		
          // });

		  // var yolo = 'Variable locale !';
		  // $("<h4> BOOP </h4>").appendTo( "#tester" );
		  
		  // document.getElementById('foo').innerHTML = data.description;
		  
          // $('<ul/>', {
             // 'class': 'interest-list',
             // html: items.join('')
          // }).appendTo('body');

       // },
      // statusCode: {
         // 404: function() {
           // alert('There was a problem with the server.  Try again soon!');
         // }
       // }
    // });
  // });
// });

// $(function Testjavascript() 
  // { alert ('le javascript fonctionne !'); 
				// $.ajax({ 
				// type: 'GET', 
				// url: 'http://barchezalphonse.fr', 
				// data: { get_param: 'value' }, 
				// dataType: 'json',
				// success: function (data) 
				// { 
				// document.getElementById('boisson').innerHTML = data.description;
				// }
				// });
				
			// alert ('Connect');
	
			// });
	
	
	
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
       url: 'http://barchezalphonse.fr',
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
		
		alert('Trial');	

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
       url: 'http://barchezalphonse.fr',
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
  
  
  