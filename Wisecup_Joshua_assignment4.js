//alert("JavaScript works!");

// String Functions

function phoneChecker( phone ) {
	phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/; 
		if( !phone.match( phoneRegex ) ) {
			alert( 'Please enter a valid phone number.' );
		return false;
		}
	console.log( 'The phone number is valid.' );
	return true;
}

function emailChecker( email ){
	emailRegex = /^([a-zA-Z0-9])+([\.a-zA-Z0-9_-])*@([a-zA-Z0-9])+(\.[a-zA-Z0-9_-]+)+$/;
 		if( !emailRegex.test( email.value ) ) {
  			alert( 'Please enter a valid email address.' );
  		return false;
 		}
	console.log( 'The email is valid.' );
 	return true;
}

function urlChecker( url ) {
	var urlRegex = /((\bhttps?:\/\/)|(\bwww\.))\S*/;
 		if( !url.match( urlRegex ) ) {
  			alert( 'Please enter a valid URL.' );
  		return false;
 		}
	console.log( 'The URL is valid.' );
 	return true;
}


function stringCase ( string ) {  
	return string.toLowerCase().replace(/\b(\w)/g, function ( $1 ) { return $1.toUpperCase(); });
  	console.log( 'The characters have been converted to uppercase.' );
}  


function stringSeparator ( dateString ){
	var replaceRegex = /([01]?\d)[-\/ .\/ ,]([0123]?\d)[-\/ .\/ ,](\d{4})/;
 		if( !dateString.replace( replaceRegex, '$1/$2/$3' ) ) {
  			console.log( 'The characters have been replaced.' );
 		}
}


// Number Functions

function moneyMaker (){}

function percentDif (){}

function dayDif (){}

function numberFix (){}




// Array Functions


function smallValue (){}


function totalValue (){}


function keyExchange (){}
