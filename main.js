let audio = null;
const musicVolume = 20;
const songs = [
    "/assets/music1.mp3",
    "/assets/music2.mp3",
    "/assets/music3.mp3",
    "/assets/music4.mp3",
    "/assets/music5.mp3",
];

function playRandomSong() {
    audio = new Audio(songs[Math.floor(Math.random() * songs.length)]);
    audio.volume = musicVolume / 100;
    audio.addEventListener("canplaythrough", () => audio.play());
    audio.addEventListener("ended", () => playRandomSong());
}

function toggleMusic() {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
        audio.src = "";
        audio.load();
        audio = null;
    } else {
        playRandomSong();
    }
};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".music-button").style.display = "block";
    document.querySelector(".loading").style.display = "block";
});

window.addEventListener("load", () => {
    document.querySelector(".loading").style.display = "none";
});