const clapDetector = require('clap-detector'); 

const clapConfig = {
	AUDIO_SOURCE: 'alsa hw:1,0',
	CLAP_AMPLITUDE_THRESHOLD: 0.25,
	CLAP_ENERGY_THRESHHOLD: 0.3,
	CLAP_MAX_DURATION: 1500,
};

clapDetector.start(clapConfig);

clapDetector.onClap((history) => {
	console.log('clap detected with');
	console.dir(history);
});
