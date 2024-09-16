let welcomeIntervalId;
let awesomeIntervalId;

function welcomeMessage(time) {
	// Array of messages to display
	const messages = [
		"Hello!",
		"Pinch and drag any corner to flip a page.",
		"You can also press arrow keys instead.",
	];
  
	let index = 0;
  
	function updateMessage() {
	  $('.welcome-message > div').text(messages[index]);
	  index = (index + 1) % messages.length;
	}

    updateMessage();
    welcomeIntervalId = setInterval(updateMessage, time);


    // Stop the interval
    function stopWelcomeMessage() {
        clearInterval(welcomeIntervalId); 
    }
};

function awesomeMessageHide(time) {
    function hideAwesome() {
        $('.awesome-message > div').fadeOut(time);
    }
    awesomeIntervalId = setInterval(hideAwesome, time);
}