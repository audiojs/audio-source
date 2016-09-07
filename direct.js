/**
 * @module audio-source/direct
 */

const AudioBuffer = require('audio-buffer');
const isAudioBuffer = require('is-audio-buffer');


module.exports = function createSourceReader (source, options) {
	options = options || {};
	let frameSize = options.samplesPerFrame || 1024;
	let channels = options.channels || 2;
	let sampleRate = options.sampleRate || 44100;
	let count = 0;
	let ended = false;

	//main data holder
	console.log(channels)
	let sourceBuffer = isAudioBuffer(source) ? source : new AudioBuffer(channels, source, sampleRate);

	readSlice.end = () => {ended = true;};

	return readSlice;

	function readSlice (outputBuffer) {
		if (ended) return null;
		// console.log(outputBuffer.numberOfChannels)

		if (!outputBuffer) {
			outputBuffer = new AudioBuffer(channels, frameSize, sampleRate);
		}

		//bring data slice from source buffer to target buffer
		for (let i = 0; i < channels; i++) {
			outputBuffer.getChannelData(i).set(
				sourceBuffer.getChannelData(i).subarray(count, count + frameSize)
			);
		}

		count += frameSize;

		return outputBuffer;
	}
}

