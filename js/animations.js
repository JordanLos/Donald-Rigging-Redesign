window.onload = function() {
var icon = document.getElementsByClassName("landing-anim");
var logo = document.getElementById("logo")
TweenLite.from(logo, 1, {opacity:0, paddingBottom:"31px"});
TweenLite.from(icon, 1.5, {opacity:0, paddingBottom:"31px", delay:1.5});
}
function moveToSide(e, side) {
	TweenLite.to(e, 1, {side:"0px"});
}