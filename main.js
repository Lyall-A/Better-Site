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
    // audio.playbackRate = 10;
    audio.volume = musicVolume / 100;
    audio.addEventListener("canplaythrough", () => audio.play());
    audio.addEventListener("ended", () => playRandomSong());
}

// document.addEventListener("firstinteraction", () => {
//     playRandomSong();
// });

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

// Capture first interaction
// const firstinteractionEvent = new Event("firstinteraction");
// const clickListener = document.addEventListener("click", () => {
//     document.removeEventListener("click", clickListener);
//     document.removeEventListener("keydown", keydownListener);
//     document.dispatchEvent(firstinteractionEvent);
// });
// const keydownListener = document.addEventListener("keydown", () => {
//     document.removeEventListener("click", clickListener);
//     document.removeEventListener("keydown", keydownListener);
//     document.dispatchEvent(firstinteractionEvent);
// });