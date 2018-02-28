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
	
	
	
$(function ChargerInfo() {
       $.ajax({
       url: 'http://barchezalphonse.fr',
       dataType: 'json',
       success: function(data) 
	   {
         
		 
		//document.getElementById('boisson').innerHTML = data.description;
		window.alert(BOOP);
        

       },
		statusCode: {
         404: function() {
           alert('There was a problem with the server.  Try again soon!');
         }
       }
    });
  });
  
$(function Trial() {
       $.ajax({
       url: 'http://barchezalphonse.fr',
       dataType: 'json',
	   contentType: "application/json; charset=utf-8",
       success: function(data) {
         
		var code = "<div class='w3-col s12 m12 w3-display-container'>";	
		var obj = JSON.parse(data.nomP);
		
		for (i=0;i<5;i++) 
		{
			code += "<div class='w3-card w3-grey' style='width:100%'>";
				code += "<img src='img/TEST2.png' alt='Lights' style='width:100%'>";
				code += "<div class='w3-container w3-grey'>";
					code += obj[i];
				code += "</div>"; 
			code += "</div> <br>"; 
		}
		code += "</div>"; 
	
		
		document.getElementById('trial').innerHTML = code;
		
        

       },
      statusCode: {
         404: function() {
           alert('There was a problem with the server.  Try again soon!');
         }
       }
    });
  }); 
  
  
  $(function TheFetch() {
       $.ajax({
       url: 'http://barchezalphonse.fr',
       dataType: 'json',
	   contentType: "application/json; charset=utf-8",
       success: function(data) {
         
		var code = "<div class='w3-col s12 m12 w3-display-container'>";	
		var obj = JSON.parse(data.descriptionP);
		
		Object.keys(obj).forEach(function(key) {
		code += "<div class='w3-card w3-grey' style='width:100%'>";
				code += "<img src='img/TEST2.png' alt='Lights' style='width:100%'>";
				code += "<div class='w3-container w3-grey'>";
					code += obj[key];
				code += "</div>"; 
			code += "</div> <br>";

		});
		code += "</div>"; 
	
		
		document.getElementById('trial').innerHTML = code;
		alert('DONE');
        

       },
      statusCode: {
         404: function() {
           alert('There was a problem with the server.  Try again soon!');
         }
       }
    });
  }); 
  
  
  