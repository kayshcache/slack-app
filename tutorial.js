require('dotenv').config();
const { WebClient } = require('@slack/web-api');

const web = new WebClient(process.env.OAUTH_ACCESS_TOKEN);

const currentTime = new Date().toTimeString();

(async () => {

	const res = await web.auth.test();
	
	const userId = res.user_id;

	await web.chat.postMessage({
		channel: userId,
		text: `The current time is ${currentTime}`,
	});

	console.log('Message posted!');
})();
