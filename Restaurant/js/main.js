/*
	Creator: Sam Kratzer
	Date created: 6/18/2019
	Date last modified: 6/18/2019
*/

function resetForm() {
	clearErrors();
	document.forms["form"]["name"].value = "";
	document.forms["form"]["email"].value = "";
	document.forms["form"]["phone"].value = "";
	document.forms["form"]["additional-information"].value = "";

	document.getElementById("m").checked = false;
	document.getElementById("t").checked = false;
	document.getElementById("w").checked = false;
	document.getElementById("th").checked = false;
	document.getElementById("f").checked = false;

	document.forms["form"]["name"].focus();
}

function validateForm(){
	if (document.forms["form"]["name"].value == ""){
		alert("Please enter name");
		return false;
	} 

	if (document.forms["form"]["email"].value == ""){
		alert("Please enter email");
		return false;
	}

	if (document.forms["form"]["phone"].value == ""){
		alert("Please enter phone");
		return false;
	}

	var i=0;
	if (document.getElementById("m").checked == true) i++;
	if (document.getElementById("t").checked == true) i++;
	if (document.getElementById("w").checked == true) i++;
	if (document.getElementById("th").checked == true) i++;
	if (document.getElementById("f").checked == true) i++;

	if (i==0){
		alert("Please select availability");
		return false;
	}

	alert("Valid data! Thank you.");
	resetForm();
	return false;
}