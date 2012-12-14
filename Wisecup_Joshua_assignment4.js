//alert("JavaScript works!");

// String Functions

function phoneChecker( phone ) {
	phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/; 
		if( !phone.match( phoneRegex ) ) {
			alert( 'Please enter a valid phone number' );
		return false;
		}
	return true;
}

function emailChecker ( email ){
	emailRegex = /^([a-zA-Z0-9])+([\.a-zA-Z0-9_-])*@([a-zA-Z0-9])+(\.[a-zA-Z0-9_-]+)+$/;
 		if( !emailRegex.test( email.value ) ) {
  			alert( 'Please enter a valid email address' );
  		return false;
 		}
 	return true;
}

function urlChecker ( url ) {
	var urlRegex = /((\bhttps?:\/\/)|(\bwww\.))\S*/;
 		if( !url.match( urlRegex ) ) {
  			alert( 'Please enter a valid URL' );
  		return false;
 		}
 	return true;
}





function stringCase (){}

function stringSeparator (){}


// Number Functions

function moneyMaker (){}

function percentDif (){}

function dayDif (){}

function numberFix (){}




// Array Functions


function smallValue (){}


function totalValue (){}


function keyExchange (){}
