/*****Image Gallery*******
*************************/
/*PURPOSE: Toggle between the 2 viewable images of each service. The code toggles the image by fading out the front image to reveal the back image, and fades in the front image to hide the back image. Users can toggle between the images by clicking the image itself or its thumbnail. 
*/

document.onreadystatechange = function () {
	if (document.readyState === 'complete') {

	//array front images for each service to be faded in or out
	var image1 = document.getElementsByClassName('service-image-1');
	//array of 1st thumbnail image for each service
	var thumb1 = document.getElementsByClassName('service-thumb-1');
	//array of 2nd thumbnail image for each service
	var thumb2 = document.getElementsByClassName('service-thumb-2');

	//Fades out front image, revealing back image
	function fadeOut(serviceIndex) {
		TweenLite.to(image1[ serviceIndex ], 0.2, {opacity: 0});
		TweenLite.to(thumb1[ serviceIndex ], 0, {borderColor: "transparent"});
		TweenLite.to(thumb2[ serviceIndex ], 0, {borderColor: "white"});
	}
	//Fades in front image, hiding back image
	function fadeIn(serviceIndex) {	
		TweenLite.to(image1[ serviceIndex ], 0.2, {opacity: 1});
		TweenLite.to(thumb2[ serviceIndex ], 0, {borderColor: "transparent"});
		TweenLite.to(thumb1[ serviceIndex ], 0, {borderColor: "white"});
	}
	//Creates an array for toggleByImage to test whether the 1st image is faded in or out
	var clickState = []
	//creates a clickState index for each service
	for (i = 0; i < image1.length; i++) {
		clickState.push(0);
	}

	//Calls FadeOut by clicking 1st thumbnail and FadeIn by clicking the 2nd thumbnail. Also updates the clickState for toggleByImage
	function toggleByThumb(i) {
		thumb1[ i ].onclick = function() {
		clickState[ i ] = 0;
		return fadeIn(i);
		};
		thumb2[ i ].onclick = function() {
		clickState[ i ] = 1;
			return fadeOut(i);
		};
	}
	//an array to store the thumbnail pairs for each service
	var allThumbs = []
	//adds a ToggleByThumb onclick event for each service
	for (i = 0; i < thumb1.length; i++) {
		allThumbs.push(toggleByThumb(i));
	}
	//Fades the front service image in or out when the user clicks on the image
	function toggleByImage( i ) {
		image1[ i ].onclick = function() {
			if (clickState[ i ] == 0) {
				clickState[ i ] = 1;
				return fadeOut( i );
			} else if (clickState[ i ] == 1) {
				clickState[ i ] = 0;
				return fadeIn( i );
			}
		};
	}
	//Creates a toggleByImage function for each service
	for (i = 0; i < image1.length; i++) {
		toggleByImage(i);
	}

	/****LANDING ANIMATION FIX *****/
	//if the ladning animation script (located in the <head> of the html) runs below 800px, it will misplace the #contact-div should the screen move beyond 800px). This code resets the margin changed by the landing animation when the window resizes beyond 800px
	if (window.matchMedia("(min-width: 800px)").matches) {
		document.getElementById( "contact-div" ).style.margin = "0px";
	}

	}
};

