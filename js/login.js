let password = document.getElementById("password");
let show = document.querySelector(".fa-eye");

let state = true;

function showPassword() {
	if (state) {
		show.style.color = "var(--secondary-color)";
		password.setAttribute("type", "text");
		state = false;
	} else {
		show.style.color = "var(--black-color)";
		password.setAttribute("type", "password");
		state = true;
	}
}

let login_form = document.getElementById("login");
let sign_up_form = document.getElementById("sign_up");

function showForm(page1, page2) {
	page1.style.display = "none";
	page2.style.display = "block";
}
