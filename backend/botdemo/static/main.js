/**
 * Returns the current datetime for the message creation.
 */
function getCurrentTimestamp() {
	return new Date();
}

/**
* Current conversation History
*/
var messageHistory = [];

/**
 * Adds a new Message to history
 * It appends the '<END_OF_TURN>' at the end of the message
 */
async function addMessageHistory(args){
	let role ="Botty";
	if(args.message_side == "right"){
		role ="USER";
		await sendReq(args.text, messageHistory);
	}
	let m = role+": "+args.text+" <END_OF_TURN>";
	messageHistory.push(m);
	console.log(messageHistory);
}

/**
 * 
 */
async function sendReq(message, history){
	let data = {
		"human_say": message,
		"conversation_history": history,
	};
	console.log(data);
	const res = await fetch("http://127.0.0.1:8081/chat", {
		method: "post",
		headers: {
			"Content-Type": "application/json",
			"Accept": 'application/json',
			"Access-Control-Allow-Origin": "http://127.0.0.1:8081/chat",
			"Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
			"Access-Control-Origin": "*",
		},
		body:  JSON.stringify(data) // body data type must match "Content-Type" header
	});
	/*
	 const res = await fetch("http://127.0.0.1:8081/chat", {
		method: "POST",
		mode: "cors",
		cache: "no-cache",
		headers: {
			"Accept": 'application/json',
			"Content-Type": "application/json",
			"Access-Control-Origin": "*"
		},
		body:  JSON.stringify(data) // body data type must match "Content-Type" header
	});
	 */
	console.log(res);
	let resSay = await res.json();
	showBotMessage(resSay.say,getCurrentTimestamp());
}

/**
 * Renders a message on the chat screen based on the given arguments.
 * This is called from the `showUserMessage` and `showBotMessage`.
 */
function renderMessageToScreen(args) {
	addMessageHistory(args);
	// local variables
	let displayDate = (args.time || getCurrentTimestamp()).toLocaleString('en-IN', {
		month: 'short',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
	});
	let messagesContainer = $('.messages');

	// init element
	let message = $(`
	<li class="message ${args.message_side}">
		<div class="avatar"></div>
		<div class="text_wrapper">
			<div class="text">${args.text}</div>
			<div class="timestamp">${displayDate}</div>
		</div>
	</li>
	`);

	// add to parent
	messagesContainer.append(message);

	// animations
	setTimeout(function () {
		message.addClass('appeared');
	}, 0);
	messagesContainer.animate({ scrollTop: messagesContainer.prop('scrollHeight') }, 300);
}

/**
 * Displays the user message on the chat screen. This is the right side message.
 */
function showUserMessage(message, datetime) {
	renderMessageToScreen({
		text: message,
		time: datetime,
		message_side: 'right',
	});
}

/**
 * Displays the chatbot message on the chat screen. This is the left side message.
 */
function showBotMessage(message, datetime) {
	renderMessageToScreen({
		text: message,
		time: datetime,
		message_side: 'left',
	});
}

/**
 * Get input from user and show it on screen on button click.
 */
$('#send_button').on('click', function (e) {
	// get and show message and reset input
	showUserMessage($('#msg_input').val());
	$('#msg_input').val('');

	// show bot message
	/*setTimeout(function () {
		showBotMessage(randomstring());
	}, 300);*/
});

/**
 * Returns a random string. Just to specify bot message to the user.
 */
function randomstring(length = 20) {
	let output = '';

	// magic function
	var randomchar = function () {
		var n = Math.floor(Math.random() * 62);
		if (n < 10) return n;
		if (n < 36) return String.fromCharCode(n + 55);
		return String.fromCharCode(n + 61);
	};

	while (output.length < length) output += randomchar();
	return output;
}

/**
 * Set initial bot message to the screen for the user.
 */
$(window).on('load', function () {
	showBotMessage('Hola mucho gusto! Te habla Botty por parte de EventPlanner, Comentame que servicios estas buscando para tu evento?.');
});
