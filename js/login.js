function loginUser() {
	var login = $("#login").val();
	var password = $("#password").val();
	// Returns successful data submission message when the entered information is stored in database.
	var dataString = 'email=' + login + ' &password=' + password;
	if (login == '' || password == '')
	{
    var divToDisplay = 'loginResults.html #warn';
    $('#result').load(divToDisplay);
	}
	else
	{
		// AJAX code to submit form.
		$.ajax({
			type: "POST",
			headers:{'Access-Control-Allow-Origin': '*'},
			url: "http://barchezalphonse.fr",
			data: dataString,
			dataType : 'json',
			cache: false,
			success: function(response)
			{
				if (response.result === 'success')
				{
					if(sessionStorage != undefined)
					{
						sessionStorage.setItem("user", response.user);
						//document.getElementById('boisson').innerHTML = response.description;
						window.location="trial.html";
					}
				}
				else
				{
					var divToDisplay = 'loginResults.html #'+response.result;
					$('#result').load(divToDisplay);
				}
			},
			error : function(error)
			{
        var divToDisplay = 'loginResults.html #error';
				$('#result').load(divToDisplay);
			}
		});
	}
}


$(function boby() {  
  $('#clickme').click(function() {
       $.ajax({
       url: 'http://barchezalphonse.fr',
       dataType: 'json',
       success: function(data) {
          var items = [];

          $.each(data, function(key, val) {

            items.push('<li id="' + key + '">' + val + '</li>');    
		
          });

		  var yolo = 'Variable locale !';
		  $("<h4> BOOP </h4>").appendTo( "#tester" );
		  
		  document.getElementById('foo').innerHTML = data.description;
		  
          $('<ul/>', {
             'class': 'interest-list',
             html: items.join('')
          }).appendTo('body');

       },
      statusCode: {
         404: function() {
           alert('There was a problem with the server.  Try again soon!');
         }
       }
    });
  });
});

$(function ChargerInfo() {
       $.ajax({
       url: 'http://barchezalphonse.fr',
       dataType: 'json',
       success: function(data) {
         
		 
		  
		  document.getElementById('boisson').innerHTML = data.description;
		  
        

       },
      statusCode: {
         404: function() {
           alert('There was a problem with the server.  Try again soon!');
         }
       }
    });
  });
