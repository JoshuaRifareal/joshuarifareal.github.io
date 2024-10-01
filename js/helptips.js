let welcomeIntervalId;

$(document).ready(function() {
    $('.restart-button > div').text("Restart");

    $('.restart-button').on('click', function() {
        $('.magazine').turn('page', 1);
    });
});

function welcomeMessage(changeTime, fadeInTime) {
    $('.welcome-message > div').fadeIn(fadeInTime);
    $('.awesome-message').css('visibility', 'hidden');

	// Array of messages to display
	const messages = [
		"Hello! 👋",
		"Pinch and drag any corner to flip a page.",
		"You can also press arrow keys instead.",
	];
  
	let index = 0;
	function updateMessage() {
	  $('.welcome-message > div').text(messages[index]);
	  index = (index + 1) % messages.length;
	}

    updateMessage();
    welcomeIntervalId = setInterval(updateMessage, changeTime);
};

function welcomeMessageHide(){
    $('.welcome-message').css('visibility', 'hidden');
}

function awesomeMessageShow(time){
    welcomeMessageHide();
    clearInterval(welcomeIntervalId); 
    $('.awesome-message').css('visibility', 'visible');
    $('.awesome-message > div').text("Awesome! 🎊");
    $('.awesome-message > div').fadeIn(time);
}

function awesomeMessageHide(delayTime, fadeOutTime) {
    function hideMessage() {
        $('.awesome-message > div').fadeOut(fadeOutTime);
    }
    setInterval(hideMessage, delayTime);
}

function zoomMessageShow(time) {
    $('.awesome-message').css('visibility', 'hidden');
    $('.zoomhow-message').css('visibility', 'visible');
    $('.zoomhow-message > div').text("Click anywhere to zoom into details! 👀");
    $('.zoomhow-message > div').fadeIn(time);
}

function zoomMessageHide(delayTime, fadeOutTime) {
    function hideMessage() {
        $('.zoomhow-message > div').fadeOut(fadeOutTime);
    }
    setInterval(hideMessage, delayTime);
}

function zoomEscapeShow(time) {
    // Hide other messages
    welcomeMessageHide();
    $('.awesome-message').css('visibility', 'hidden');
    $('.zoomhow-message').css('visibility', 'hidden');


    $('.zoomesc-message').css('visibility', 'visible');
    $('.zoomesc-message > div').text("Press ESC or click again to zoom out.");
    $('.zoomesc-message > div').fadeIn(time);
}

function zoomEscapeHide(time) {
    $('.zoomesc-message > div').fadeOut(time);
}

function outroMessageShow(time) {
    // Hide other messages
    $('.outro-message').css('visibility', 'visible');
    $('.outro-message > div').text("Send me a message! 🤘");
    $('.outro-message > div').fadeIn(time);
}

function outroMessageHide(time) {
    $('.outro-message > div').fadeOut(time);
}

