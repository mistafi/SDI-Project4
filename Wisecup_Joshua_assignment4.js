//alert("JavaScript works!");


function phoneChecker( phone ) {
  phoneRegex = /^\(\d\d\d\) \d\d\d-\d\d\d\d$/;
 if( !phone.match( phoneRegex ) ) {
  alert( 'Please enter a valid phone number' );
  return false;
 }
 return true;
}



phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/; 


function emailChecker (){}