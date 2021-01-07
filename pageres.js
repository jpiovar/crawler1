const Pageres = require('pageres');

(async () => {
	await new Pageres()
		.src('https://github.com/sindresorhus/pageres', ['480x320', '1024x768', 'iphone 5s'], {crop: true})
		.src('https://sindresorhus.com', ['1280x1024', '1920x1080'])
		.src('https://google.com', ['1280x1024', '1920x1080'])
		.src('data:text/html,<h1>Awesome!</h1>', ['1024x768'])
		.src('https://google.com', ['1920x1080'], { delay: 10, filename: 'pmdhome0' })
		.src('https://google.com', ['1920x1080'], { delay: 10, format: 'jpg', filename: 'pmdhome1' })
		.dest('screenshots')
		.run();

	console.log('Finished generating screenshots!');
})();