var audio = document.querySelector("#audio");
var play = document.querySelector(".play");
var pause = document.querySelector(".pause");
var mute = document.querySelector(".mute");
var restart = document.querySelector(".restart");
var range = document.querySelector("#range");
var range2 = document.querySelector("#range2");
var trackSelector = document.querySelectorAll('input[name="track"]');
var audioImage = document.getElementById('audio-image');
var muteIcon = document.querySelector(".mute i");

play.addEventListener("click", function () {
    audio.play();
});

pause.addEventListener("click", function () {
    audio.pause();
});

mute.addEventListener("click", function () {
    audio.muted = !audio.muted;
    muteIcon.classList.toggle("fa-volume-up", !audio.muted);
    muteIcon.classList.toggle("fa-volume-mute", audio.muted);
});

restart.addEventListener("click", function () {
    audio.currentTime = 0;
    audio.play();
});

range.addEventListener("input", function () {
    audio.currentTime = (range.value * audio.duration) / 100;
});

audio.addEventListener("timeupdate", function () {
    range.value = (audio.currentTime * 100) / audio.duration;
});

range2.addEventListener("input", function () {
    audio.volume = range2.value;
});

trackSelector.forEach(function (track) {
    track.addEventListener("change", function () {
        audio.src = this.value;
        audioImage.src = this.dataset.image;
        audio.play();
    });
});