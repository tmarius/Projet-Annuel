		
	
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
       $.ajax({
       url: 'http://barchezalphonse.fr/requetes/image_produit.php',
       dataType: 'json',
	   contentType: "application/json; charset=utf-8",
       success: function(data) {
         
		var code = "<div class='w3-col s12 m12 w3-display-container'>";	
		var nom = JSON.parse(data.nomP);
		var img = JSON.parse(data.description);
		var nbstring = data.nbDescription;
		var nb = num = parseFloat(nbstring) || 0;
		theimage = "<img src='data:image/jpeg;base64,"+img+"' width='160' height='140' alt='image'>";
		alert (theimage);
		
		var Theimage = new Image();
		//Theimage.src = data.description + base64JsonData;
		//Theimage.src = "data:image/png;base64," + base64JsonData;
		
		for (i=1;i<nb;i++) 
		{
			code += "<div class='w3-card w3-grey' style='width:100%'>";
				code += theimage;			
				code += "<div class='w3-container w3-grey'>";
					code += nom[i];
					code += "</br>"; 
					//code += "<img src='data:image/jpeg;base64,R0lGODlhEAAOALMAAOazToeHh0tLS/7LZv/0jvb29t/f3//Ub//ge8WSLf/rhf/3kdbW1mxsbP//mf///yH5BAAAAAAALAAAAAAQAA4AAARe8L1Ekyky67QZ1hLnjM5UUde0ECwLJoExKcppV0aCcGCmTIHEIUEqjgaORCMxIC6e0CcguWw6aFjsVMkkIr7g77ZKPJjPZqIyd7sJAgVGoEGv2xsBxqNgYPj/gAwXEQA7' width='16' height='14' alt='ilage2'>";
					//code += "<img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAlgCWAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAIBAPkDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD2aiiigAooooAKKKKACiiigAopKM0ALRTGkUd8mommJ6HFJtIdieiqvmMSfnOaPMc8Fs1POh2LDSKvVqb56+9Vyc+9AHHTilzsLExuPRc/jQLlN21sqT61BtI4HFNIwCOSfelzMLIu+Yn94fnTs1n9sdKBIQfvEfQ0+cOU0KWqSXhHDDd71MLqPvkVSkmKzJ6KasiN91gadVCCiiigAooooAKKKKACiiigAooooAKKKKACkpHYqpI5PaoBM3Ic4P1pNgTllHU1G0p/h/M03cPXGaQMtS2OwnzE/M1Gfel3D2xSEipKEPTFNwce9O79KUkY5pAM5+metKqg9/zp3y+1NZhQMNtPAGOaaHHrRuy3UYouA/A+lIQDSZyOaaTxjNMQ2ReOO1ViWznGKnzgcnNRP1+vaoY0N+hpCG5waXj/AOvQOO9KwxQSpB7/AFqxDdspxJyKqlsGlDnn1FNOwrXNUSIQMMOfelzWWHpyTsvRiMe9aKZPKadFQW0/nKcjBH61PWhIUUUUAFFFFABRRRQAUUUUAMk+7VNl/fnODVyTp+NU3P78/SokND9tAUUA07OagoTaB/Sl2g9qXvzRnigBAMAcUjbeOxoLe1NOM/hRcYxyOnPNIwPZsfWmPKseXbJHQUqOrjdnrUc2th2Gnd/eH0pu9wCQ3Sntwev5VEXzn9c0MB3nSH+LimGSQr98/hTd68qBnFNLgHPfvSuOwpmfdjcSKiaZ933jTZJAOc85phYNyKhsdibzHIzupPMYn75qLzN3bAzzTGZt3HTtScrAkT7iSPmNPUjjk/nUB6CpIzucd6fMKxbUJ5I3DJPSop/lC4wMHtUhTbHg+9QTn5QcVdxGnY9Tk5OKu1R08/ntq9XTHYzYUUUUxBRRRQAUUUUAFFFFADJPu/jVN1zNVyT7v41TZv8ASCPSokUh60uPekFOzkVBQtJR3pMjHekAEZNIQOtLmmlh+NAEUqKwwaYcJhQMnvT2bIPc1GxBdRyGNZvuUg6gA9Bz9aryvtOAMVbzhcdgOtVJlyd2MUSvYEIuW6dc80rKG6+tIhCDLcUb14wfwqegytMu1qRB+tPkfJxio2BwFHBrPrcfQGGGx1zTlGT600428npTgcflVADHn2p9t80wqIsPriprT72T9KlayG9i8x3RA+mRVW44UfWrBwIzxgE5qtcHKCtmQjS03lc/7NX6oaacoP8AdFX66Y7GT3CiiiqEFFFFABRRRQAUUUUAMl+5VF/+PhvXHrV6X7hqg5xct9KzmVEmXrTuKjBApQe/9agof0pOnFJu64o680rgB4ph49aU8VExy3XpSuMaxKgnvnrSRg5z69PanN0oD5454pdRjPUY6+tMc46tyTTpHxwDyaiPPJ5pARygn6CodrFgPzqcscnjGPeonkK9OazaRSYh2+mMVHtAHv1BpfMI7daiZwDuBycdPSk2MUcNhiM/WnHnoeKjyMhjmjOOg461IEmckDHAqeEgdOlVd3zf/XqaI47dfeqTBlzfuTrmoJuijvmlVsofrTJTwD71dyTW00bVIxjAq/VHTfun6VerrjsYvcKKKKoQUUUUAFFFFABRRRQAyT7hrPkYC4YCtCU4jNZM8n+kHgfgayqMuJYDZ5NOBWoFfj/69HmY71lcuxYBH0pC3PNRCbkGjzBzyKLiHk9sU0nnoOOuKjL89setNMg5HTNJsY9my3HambmHHXPekLggj3qItxjnBqWxj2JJHp3qJ2+U+w4FNL989PWmNLjNS2Owb8kHpTH5A4ppcgn+dRtJyPWs7lWHFh0NRn5ScDg00uM00PnpzS5h2HA5JzxSqQO2KjJ7dqXIJqL6jsTDHc1JG3v3qsDz1qSNuhHXvVqWorFpGAz6dqJCCR0qNXwBimSSfdq7k2N7TP8AVn8Kv1Q0pt0LH3q/XfHY53uFFFFUIKKKKACiiigAooooAhuhm2k7cVx4vLl7uU7lKxttwR6V2NwMwSf7priSMXM3GPnNeXmE5QinFnXhkm2mXv7QkAP7nP8Aumk/tQ8DyZBz1xVelrx1jqqOz2ECx/aiFtpDj8OtP/tOIgfNj0yDVXvR196pY+p2F7CJe+3xYyHHPvTTeRngMM+5qlgeg/Kjav8AdH5VX9oS7C+routeR/3gaje7XH3v1qpsXP3QKTykGTsHNP6++wfV13J/tI2gcAj3zTGnX1zUZjTgbBj0pfKXH3RS+vPsP2CFNxnv2qMzKWHNSFF/uj8qPLU4+RfypfXG+g/YohaVSQM0izLzzirHlp/dX8qdtX0H5VLxb7B7JFXzcml83JPFWgq8fKKUAdhU/XH2D2SKol/2Tx7U5JWJzsb8qtYwfSnCp+uy7B7OJArSnpG3PtTZVmADBVGATyatjpUVy22Bzn+A4/KmsXUk0hckUbHh2cz2bORj5hx+FbFYvhcf8SoH1b+grar6un8CPLn8TCiiirJCiiigAooooAKKKKAGSjMT/wC6a4qVSt3Jnuc12zcqR7Vxdyu2+mGSeR1ry8yV6Z14X4gGPrS0gpRmvmmemLRR1opCDvS0neg9aBgaQ0UUAHegcUdTRQAoNLSUtMApRSCl70hC4pwFNAp4qRAKcKb3pwpEscBwKgvDi0mI6iM1P2qtqBxZTf7uP1rSlrNLzJZveHV26Un1NatZ+hrt0qH3yf1rQr7an8KPJluwoooqyQooooAKKKKACiiigBDXG6gNupSj1FdlXI6soXU291/rXnZir0jpwz98gHWlpOaTJL7QOMc18ueqO704c5pv3RT1/KkIbR3pTxSHrQAnQ0GlPWjr+FAxOtHWl6UUAJTqQUooEA/WlFJ706kAvXFOFN7U5akkM04ZOaSloEOHGB1qtqAX7GwPcgfrVkdKqaj/AKlB6yCtaCvVj6kvY6nSht0y34x8lXKgsl22MA/6Zj+VT19tHRHkPcKKKKoQUUUUAFFFFABRRRQAlctrq41NW9jXVVzfiFcXcbfn+VcOOV6LN6Hxmd9OlAGaUUo4PtXyZ6txQo9KOlLSUgEPWkPWnHim9aBhRR0opjCkxzS0GgBKWiloAKcKbThSELTqQc06pJE64xTh0pBTqQmLVO/GWt09XJP5VdFVJ18y/tVHXJ/pXVhFetEifws7GIbYUX0UCn0gpa+0PICiiigAooooAKKKKACiiigArnfEBP2kDpt2n88iuirE8RxjyFkxzwM/jXLi1eizWi7TRjDpSimgU6vj2euLmijvR3pAB6U3rTqb0NA0FFHek70xi4ozR7UUAKOtGOaQU6kIKUfSkpaAFHFPzmmCn1JICndaQCnCkIXoahhXfrdsvoB/P/61TdaTTV8zxCD2RB/Ku7L1fEIxqu0GdTS0lLX2B5YUUUUAFFFFABRRRQAUUUUAFZevpv08+1alUtWTfp8g9qyrK9NouDtJHMDkCjJpE+4PpTuor4uWjZ7C2AUvpR2oqRhSGlozQMbQaKKBgKKO1A6UwCnCm45p1IQdKWkpcZpAKB0p3rSCnCkSLTx0pg7U4UhMWpNBTfrFzJ1CjGfyFR1a8MJn7TMerPjP416uUxvWuc2IdoG9S0UV9SecFFFFABRRRQAUUUUAFFFFABUF4u+0lH+zU9NcbkYeopSV00NbnGRAhMHkjinGlI2TSp3DmkIr4qsrVJI9iGsUGaBzS4oArIsKKMUUAIaKOtBoGJznig0GlxQMMUtGKKBCilx0pBTutIQdqUUgp1IQCnCkA5pwpCEkbajN6DNanhqPZpSt3diax7slbWU5/hrotJj8rTLdcY+QGvdyeOspHHiXoi7RRRX0JwhRRRQAUUUUAFFFFABRRRQAUhpaSgDkrxfL1K4X1INRnpVzWk2anu/vpVPmvkMdHlrs9ai7wQlL2oxRXGbBQaKWkAlHWgigUxiEYoFOooASlAoFKRSEHSloopAKKUUlKKBDqcDTcU4UiWV74k2+3qXZV/WuthTy4UT+6oFcq0fnX1nF2aUE/hXW19NlEbUm+7OHFPVIWiiivYOQKKKKACiiigAooooAKKKKACiiigDB8RJiW3k7cqayvSt7xBHusQ/eNwawR0r5vNY2qJno4Z3jYXNFFFeQdQdjS0lL2pDE7UUtGKADtRR+FFAC0elFHWgBaUUnelpCAU4daQClxzSELThSY5pcUCHaenm65D/0yjLV0wrB0GPdqF1KRwqqg/nW9X2GXw5cPE82u7zFoooruMAooooAKKKKACiiigAooooAKKKKAKmpxebp06/7BIrl0OQD6jNdiy7lKnoRiuO2GMlCOVYr+Rrxc2h7qkdmFerQtFFLivnTvAUtJS9qAEo60YpcUDEpaKO9ABRS0YoABSijHNLikIBSjrQKUUhC5p1JSSnZCzegJppXdiWafh1P9DlmxzLKx/DpWvVPSYvJ0u3UjB2An8eauV9zSjy01E8mbvJsKKKK0JCiiigAooooAKKKKACiiigAooooAQ1y2oR+XqM69MtuH411OKwdcj23qSY4kjx+IP8A9euDHw5qDN6DtMyzwadQaXHSvk2eoJmlBoI9qAKQCUDOacRSYoADR1NKaTAoAM0uaKXFIA70ooxSigQCnAUgFOFIQCmXA3xiMZ/eMq/makFSW6ebqNrHjgMXP4CunCQ560UZzdotnRIoVQo6AYp1IKWvtTygooooAKKKKACiiigAooooAKKKKACiiigArL12PdbxSf3H5+h4rUqtqEXnWEyDrtyPqOazqx5qbiVB2kmcx/Sloznn2pK+KmrSseunoLQKKKzKA0d6KKACiiloASlFFAoAdQKQUoFIQop1IKdSEKtW9ITfqEkhHEcYUfUn/wCtVQCtTRExBNN/z0kOPoOK9fKYc1bm7HNiHaJp0UUV9QeeFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFIRkEdjS0hoA5OWPypnj/uMVplX9Xj8u/YjgOob+lUSAO9fIY2nyVWj1aUrxTDrRQKK4jUO9LSGikMKKXrRQACjvRilxQAuKUUgpR70iRwFKBQKcOKQhGOyMsf4QTW9p8XkWMMfcICfqeTWIUMrJEP8Alo4X/GujH6V9JlELQcjhxL1SFooor2zlCiiigAooooAKKKKACiiigAooooAKKKKACiiigDJ1yIFYpfQlTWMa6XUYvOspFA5A3D8K5s8Gvns0p2mpdzuwzvGw3tS80Cl614h2BRiilFIBMUAUtJigLiilFFFIBQKUDFApcUhDgKeq9KQVIBge9CV3YhsmsU8zUY+4jUsfr0H9a2hWdpEfE0vq20fQf/rrSr7PBU/Z0Io86q7zYUUUV2GQUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAIwyCD0NcrNGYp3jP8JIrqjWDq8fl3u7s4Brzcxp81K/Y6MPK0jPpelFHWvlpKzPRQYoGaWgVIxKWiigQAUooHNOFIApwHNIKctIQ9afwoz2AyaaozUioZXSP++wH4d668LS55pGU3ZGtYxeVaRqRgkbj9TzVmkFLX2aVlY81u7CiiimIKKKKACiiigAooooAKKKKACiiigAooooAKKKKACszW4t0KSAco2DWnUF3F51rImMkrx9ayqw56biVB2kmcz2pMZp2MEigV8hVjaR6kXoJRS0AVzMsSjFOpKADHSnc0Uo60gACnqKQCnrVKNyWx6jAq3pqb7ovjhF/U1U9vWtXTotkBbu5z+Fe7ltH3uY5K0rIt0tFFe+cYUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABSGlpKAObvIvKupE6AHI+lQ459K1NYhxKko7jBrNxmvnMbR5Zs9ClK8RuKKXFFeRJWZ0ITFLjiilxU2ASnAUinpkc05RmmkJiqKkUUxf5VKoJrqp07siTBELuoHUnFbyIEQKOgGKzbGHM25v4RmtOvpcJT5IXOCrK7FooorsMgooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigCpqSb7Rj3XmsQriukkRZI2RhkMMGuYPmWjGGfJQHCSf41wYylzK5vRlbQXFFG8Hn86Cc8V8/UpWZ2piYpeaDSjFY+zZVxQM0qikyB3xTgQK1hTZLY9EyRUryLAAOrnoKjWYIM5wB1J7VHPbXF04jGYYmxukP3nz0Ar0qNB9DGUu5r6WWktvNbHznjHpV2o4YlhiSJBhUUKKkr3IqyscTd2FFFFUIKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAQ1k6qCkc21FYqBJtIzuX+IVr1TvowZYJMcBije4YVE1dFR3Mp7VWUNAeCMgGoDBInBGPY8VZsci38s5JidkOfY4H6Yq4DxXPKhCe5qpuJkFZB1Q49aPm/uN09K2PKjPWNfyoEMQHMYrH6jAr2zMgJIei4HvxUiW8spAVc+47VrLFGORGo/CpR+laRwlNEuq2U4NNjUqZMNtOcHnmodOaS/1SS4ZiYoSdi9gTwP0q7fTeRZu+3IPynJx14pdJiWOyVlCjfz8vb2rdRSlZGbel2XaWiitiAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKr3uPsr/MAcZUn17VPXMaxqE32hl2FkXooqJyUUVFXZPBKv22YxnKTbZRjsSMEfpV1Tk+grB0u4LAxlmBB6HBH5VtwlAcsv5VEJXRUlZlgc0/FQMyZypIH0pd6+v6VoSTBhgZIFBliX70ij8ahIjbqMk+1IsUGRtiBP0zSuBV1pnuLNFtirgPlsHkelalhsFjCI2DKEAyKhuLQSWjxyb1jx8yxgZYelVrK8aKaO3WxkhhY7QSen4VPMoz16jtdGxRSClrUgKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAErl9c0yWO5EkEzDzDwrDjP1rqajmhjuIzHLGHQ9QRUyjzKw07M4m3lutLlY3FmzK3X5cj8DWpFr2nlR5lvMh+mRV97EWTYjkdY2PyjfwPbmnBM9VVh7rWSi1omXdFH+2tKY8XBT2ZTTxqul4z9uj/AFq0baFuTbxk/wC7QLW2HS1i/Baq0gvErjVdMAGLsN/uqTTG1uwi5QXEh7bUIq6sMKcrbR59AtKWmAPl2o3fSnZi0M7+1dTvJs29nJHFjG7b831GeKZawXd7q8bzxyKIm3MWGMY7AVpCK+uH2vJ5a9TtPIFaEMCQRhEBx6k8mko3dwbsSUtFFakBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAV722W6tZIWUHI4z69q5C2069llZXkNsF6hWbOPzrtqx9qefNIRku2SSetZVIptFxlYopo94DkavOOe4/8Ar1MmlX4BB1mfj0QVdDhRjB/OnCQZ6E/jQoRG5Mof2VqX8OtS4/3Kr3WnX8GxmvJ7rcccSlAv1rZMo6YOfrSCQNtRlGGYD9aHCIczLVpbrbQLGM5x8xJJyfxqeiitTMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoopKAEdgilmOAByawWNsg3RTSOSeQRxWlqMwERj65+9jsKyFglAyv71OxU8/iKzne+hcR/2o+wpVvOeSuKdd2nlLHJjhl546VV2g8cVGpWhaF2D1/Sle5MIjmWNWUOAS/YZ5IquqHoFJPspq5bxt5TLI3ljH8Q5/AU1cTsbIOaWq9rKJIwuNpXjBPOPWp62MxaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoopCQASeAKAFpCwUZJA+tUZb1nYrAMAdWIqHkt8zFj6sc0rjsaBuIh/Fn6VG16i/wAJNVgmevH1p6ouQcAn1NGoaDvtzN9yL8zS+fMw6KPpR/Kjco6sKAKklq8km7zCCO9MaOK1xJNcbTnjC8mpZp8EorhSRgNjpVW9jguGj2zlFRSG45J9c1m9NikVbjxIsZMMMLylTjc5wB+FR2+t3Bcme2KqehRDxViCHT7UYiUDn7xGT+dTm4j/AL3FR73VladhYr+GVzGLhlcdVIwaURzPLtHCnkMOhqnd2tnd8ltjjutFvJLbuqrNuTByuOD6VSb6isaEcMsUgdW+YdeetWxcTDrjPpiqsE3mjJG01PnI65rRWJE/tGUNjyQw9QcVOl8jdVZagOD1ppj9D+dGoaF9Jo36MKfWXtYdqFuJI2+ViPY8g0XFY1aKrQXaynYw2P6ev0qxVCFooooAKKKKACiiigAooooAKKKKACqmoSbIQv8AfOKt1XvIRPAy7ckcj60nsNGcA0cWV9eaYJwODzVWRri3BCuzr/dYVCLsTfeQqfasrlWNEXPPU/WpUuI+Muc+9ZyTIOM9OxGKlBU9MVdxWLj3CjIL4A71Gr+ZhuVB6ZqpI6sNzDgHinJuIB24XHUVLY7FhwCOTkVVYHr2qRZowckHanBJ7VWurm3jJCycHofWpY0LvJBGM+tNB5+7Vf7ZB/z0JNI13GSdrEfhWbZdi1kddoP41JGNw6fSqaXfH3047461bhkZ1/eMwBGYyVwpPcZqo6iZMpVOvBqxEpk5VqqkEqAM7gOQRzSRTxco25W7VqiGaIZ4+G+YU4SKPb61TMkuM7iB65pCxYZZs/WnewieadxgRsmT6DNMErN97B96g3L13dfSkcusbMI3K4+/0xSuOxLLKqyAqwG3qc1sW0vnQJJ/eFcq0ruV8hQWzgsea6m1iMNvHGxyVXk+9EHcTJqKKK0JCiiigAooooAKKKKACiiigAooooAq3NhFc/Nyj/3lrIn0WVCSi7we6nn8q6GipcUxps497WaFvvYI/vqRUYE6tlgGwf4TXZMiuMMAR7iq76daucmIA+3FRydiuYwYPLwd6yqfUjcKsb0AUJcJ7BkIx9K0f7KiB+V2HsajfTGyMFGA9cijlYXRlNbO67BICBnBDY6/Wq7aCJDuN2xY9R1ArYk0+ftHkAfwyVF9juk4EMwHs4NLlXVBcxn8NPgbb4J9RQnhiTOW1FSPYVoyaU7tlrWQk9TxSx6TJEcx2rj8RU+zh2K55dxltoccKgiVS3rtzU76Y+AfthLDoCAAKsJbToAFtnU55IYCpDb3Tf8ALI/jJWijFLRENtmbK7W0XlL82TuJU7iCO/tVVppNwYK4Y9zxWy+nXD5+REz1+f8A+tTV0WQ43SoPzNJphcyo5Lp+BtUZ/ip6tcbsNsI9q2E0dR96cn/dUCpU0m1U5O9/q3+FHKx3RmrwOgTPHXH86BaTXahVVnHYyEgCtqO1giOUiUH1xk1NVcncXMZ9lpcVqQ7nfIOh7CtCiiqSsSFFFFMAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACkoooAKWiigBKWiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//Z' width='16' height='14' alt='ilage2'>";
					
					code += data.description;
				code += "</div>"; 
			code += "</div> <br>";
			break;	
		}
		code += "</div>"; 
			
		//document.getElementById('image').innerHTML += code;	
		//document.getElementById('test').appendChild(Theimage);
		document.getElementById('image').innerHTML += code;
		alert("WTF");
       },
      statusCode: {
         404: function() {
           alert('There was a problem with the server.  Try again soon!');
         }
       }
    });
  }); 
  

  
  
  