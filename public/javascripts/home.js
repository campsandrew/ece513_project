(function() {
	"use strict";
	
	document.addEventListener("DOMContentLoaded", function() {
		document.getElementById("login").addEventListener("click", login);
	});
	
	function login(event) {
		window.location = "login";
		//window.location.replace("login");
	}
	
})();