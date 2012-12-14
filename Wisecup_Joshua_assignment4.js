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

function emailChecker (){
emailRegex = /^([a-zA-Z0-9])+([\.a-zA-Z0-9_-])*@([a-zA-Z0-9])+(\.[a-zA-Z0-9_-]+)+$/;
}


function urlChecker (){}

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
