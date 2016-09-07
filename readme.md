[![Build Status](https://travis-ci.org/audiojs/audio-source.svg?branch=master)](https://travis-ci.org/audiojs/audio-source) [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Create audio stream from _AudioBuffer_ or _ArrayBuffer_.

## Usage

[![npm install audio-source](https://nodei.co/npm/audio-source.png?mini=true)](https://npmjs.org/package/audio-source/)

```js
const Source = require('audio-source/stream');
const Speaker = require('audio-speaker/stream');
const lena = require('audio-lena');

Source(lena).pipe(Speaker());

//create playable chopin
var audioEl = doc.createElement('audio');
audioEl.src = './chopin.mp3';

var playBtn = doc.createElement('button');
playBtn.className = 'play';
root.appendChild(playBtn);

on(playBtn, 'click', function () {
	if (audioEl.paused) {
		audioEl.play();
		playBtn.classList.add('play-pause');
	}
	else {
		audioEl.pause();
		audioEl.currentTime = 0;
		playBtn.classList.remove('play-pause');
	}
});

spectrogram.setSource(audioEl);
spectrogram.start();
```

## Related

> [web-audio-stream](https://github.com/audio-lab/web-audio-stream) — connect WebAudio to audio-stream or audio-stream to WebAudio.
