//alert("JavaScript works!");

// String Functions


function phoneChecker( phone ) {
	var phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/; 
		if( !phone.match( phoneRegex ) ) {
			alert( 'Please enter a valid phone number.' );
		return false;
		}
	return true;
}

function emailChecker( email ){
	var emailRegex = /^([a-zA-Z0-9])+([\.a-zA-Z0-9_-])*@([a-zA-Z0-9])+(\.[a-zA-Z0-9_-]+)+$/;
 		if( !emailRegex.test( email.value ) ) {
  			alert( 'Please enter a valid email address.' );
  		return false;
 		}
 	return true;
}

function urlChecker( url ) {
	var urlRegex = /((\bhttps?:\/\/)|(\bwww\.))\S*/;
 		if( !url.match( urlRegex ) ) {
  			alert( 'Please enter a valid URL.' );
  		return false;
 		}
 	return true;
}


function stringCase ( string ) {  
	return string.toLowerCase().replace(/\b(\w)/g, function ( $1 ) { return $1.toUpperCase(); });
}  


function stringSeparator ( dateString ){
	var replaceRegex = /([01]?\d)[-\/ .\/ ,]([0123]?\d)[-\/ .\/ ,](\d{4})/;
 		if( !dateString.replace( replaceRegex, '$1/$2/$3' ) ) {
 		}
}


// Number Functions


function moneyChecker() {
	var moneyValidation = document.getElementById("money").value;
	var pattern = /^\d+(?:\.\d{0,2})$/ ;
	if (pattern.test(moneyValidation)) {
		alert("The funds are in valid format.");
		return true;
	} 
		alert("The funds are not in valid format. Please enter funds in 00.00 format.");
		return false;

}



function percentDif (){}

function dayDif (){}

function numberFix (){}




// Array Functions


function smallValue (){}


function totalValue (){}


function keyExchange (){}
