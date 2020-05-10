const audioDetector = require('clap-detector');
const todoist = require('./todoist');

const config = {
	AUDIO_SOURCE: 'alsa hw:1,0',
	CLAP_AMPLITUDE_THRESHOLD: 0.25,
	CLAP_ENERGY_THRESHHOLD: 0.3,
	CLAP_MAX_DURATION: 1500,
};

audioDetector.start(config);

audioDetector.onDetections(3, 2000, (history) => {
	console.log('clap detected with');
	console.dir(history);
	todoist()
		.then(console.log);
});
console.log(new Date().toISOString(), 'washer detector started');