var list = ['./source/Sunshine Girl.mp3', './source/Lenka-The Show.mp3', './source/quiet.mp3', './source/turnbody.mp3'];
var index = 0;
var audio = document.getElementById('audio');
audio.src = list[index];
audio.controls = true;

var btnlast = document.getElementById('btn-last');
var btnplay = document.getElementById('btn-play');
var btnnext = document.getElementById('btn-next');
var btnrepeat = document.getElementById('btn-repeat');
var btnhigh = document.getElementById('btn-high');
var btnlow = document.getElementById('btn-low');
var btnfast = document.getElementById('btn-fast');
var btnslow = document.getElementById('btn-slow');
var btnnormal = document.getElementById('btn-normal');

//上一首
btnlast.addEventListener ('click', function () {
	if (index == 0) {
		index = 3;
	} else {
		index --;
	}
	audio.src = list[index];
	audio.play();
}, false)

//播放
btnplay.addEventListener ('click', function () {
	if (audio.paused) {
		audio.play();
	} else {
		audio.pause();
	}
}, false);
// audio.onplay = function () {
// 	audio.play().innerHTML = '暂停';
// }
// audio.onpause = function () {
// 	audio.pause().innerHTML = '播放';
// }
//下一首
btnnext.addEventListener ('click', function () {
	if (index == 3) {
		index = 0;
	} else {
		index ++;
	}
	audio.src = list[index];
	audio.play();
}, false) 

//重播
btnrepeat.addEventListener ('click', function () {
	audio.load();
	audio.play();
}, false);

//增加音量
btnhigh.addEventListener ('click', function () {
	audio.muted = false;
	if (audio.volume == 1) {
		audio.volume = 1;
	} else {
		audio.volume += 0.1;
	}
}, false)

//降低音量
btnlow.addEventListener ('click', function () {
	if (audio.volume <= 0.1) {
		audio.muted = true;
	} else {
		audio.volume -= 0.1;
	}
}, false)

//快进
btnfast.addEventListener ('click', function () {
	audio.playbackRate ++;
	if (audio.playbackRate > 4) {
		audio.playbackRate == 1;
	}
}, false)

//慢进
btnslow.addEventListener ('click', function () {
	audio.playbackRate -= 0.1;
	if (audio.playbackRate < 0.4) {
		audio.playbackRate = 1;
	}
}, false)

//默认播放速度
btnnormal.addEventListener ('click', function () {
	audio.playbackRate = 1;
}, false)