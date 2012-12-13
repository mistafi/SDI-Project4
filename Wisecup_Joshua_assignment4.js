//alert("JavaScript works!");


function phoneChecker( phone ) {
	phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/; 
	 if( !phone.match( phoneRegex ) ) {
	  alert( 'Please enter a valid phone number' );
	  return false;
	 }
	return true;
}

function emailChecker (){}

function urlChecker (){}

function stringCase (){}

function stringSeparator (){}


