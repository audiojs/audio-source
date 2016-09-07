'use strict';

const test = require('tst');
const Source = require('./');
const lena = require('audio-lena/buffer');
const decode = require('audio-decode');
const AudioBuffer = require('audio-buffer');


test.only('Direct', (done) => {
	const Source = require('./direct');
	const Speaker = require('audio-speaker/direct');

	let read = Source(lena, {channels: 1});
	let write = Speaker({channels: 1});

	(function again (buf) {
		buf = read(buf);
		if (!buf) return;
		write(buf, (err, buf) => {
			again(buf);
		});
	})();

	setTimeout(() => {
		read.end();
		done();
	}, 500);
});

test('Pull-stream', () => {

});

test('Stream', () => {

});




// t.test('AudioBuffer', function () {
// 	Source()
// });

// t.test('AudioBufferSourceNode', function () {

// });

// t.test('AudioNode (in general)', function () {

// });

// t.test('MediaStreamAudioSourceNode', function () {

// });

// t.test('ScriptProcessorNode', function () {

// });

// t.test('MediaStreamAudioSourceNode', function () {

// });

// t.test('Buffer', function () {

// });

// t.test('Array', function () {

// });


// it('Function', function (cb) {
// 	Source(function (data, cb) {
// 		for (var i = 0; i < 128; i++) {
// 			data.set(0, i).push(Math.random() * 2 - 1);
// 			data.set(1, i).push(Math.random() * 2 - 1);
// 		}
// 		cb(data);
// 	}).pipe(Speaker())
// });
