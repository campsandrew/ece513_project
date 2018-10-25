(function() {
	"use strict";
	
	/* Create document load function */
	document.addEventListener("DOMContentLoaded", function() {
		
		for(let field of document.getElementsByTagName("input")) {
			if(field.type === "button") continue;
			
			field.addEventListener("focusout", verify);
			field.verified = false;
		}
		
		document.getElementById("create").addEventListener("click", create);
	});
	
	function create(event) {
		let xhr = new XMLHttpRequest();
		let info = {}
		
		/* Checking if all fields have valid info */
		for(let field of document.getElementsByTagName("input")) {
			if(field.type === "button") continue;
			
			verify.call(field)
			if(!field.verified) {
				console.log("Not all fields verified");
				return
			} else {
				info[field.name] = field.value;
			}
		}
		
		/* Send ajax post request to server */
		xhr.responseType = "json";
		xhr.addEventListener("load", createResponse);
		xhr.open("POST", "/create-account");
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.send(JSON.stringify(info));	
	}
	
	function createResponse() {
		console.log(this.response);
	}
	
	function verify(event) {
		switch(this.name) {
			case "fname":
				console.log("Verify: " + this.name);
				this.verified = true;
				break;
			case "lname":
				console.log("Verify: " + this.name);
				this.verified = true;
				break;
			case "email":
				console.log("Verify: " + this.name);
				this.verified = true;
				break;
			case "password":
				console.log("Verify: " + this.name);
				this.verified = true;
				break;
			default:
				console.log("Error: " + this.name);
				this.verified = false;
		}
	}
	
})();