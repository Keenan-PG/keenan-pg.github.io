var hamburger = document.getElementById("hamburger");
var sidenav = document.getElementById("sidenav");
var main = document.getElementById("main");

function checkMenu() {
	if (hamburger.classList.contains("is-active")) {
		hamburger.removeEventListener("click", openNav);
		hamburger.addEventListener("click", closeNav);
	} else if (!hamburger.classList.contains("is-active")) {
		hamburger.removeEventListener("click", closeNav);
		hamburger.addEventListener("click", openNav);
	}
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    sidenav.style.width = "15vw";
    main.style.marginLeft = "15vw";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
	hamburger.classList.add("is-active");
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    sidenav.style.width = "0";
    main.style.marginLeft = "0";
    document.body.style.backgroundColor = "#efefef";
	hamburger.classList.remove("is-active");
}