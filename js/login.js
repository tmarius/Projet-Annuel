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
						window.location="menu.html";
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
