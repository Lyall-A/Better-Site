let hasInteracted = false;
document.onclick = () => !hasInteracted ? interaction() : null;
document.onkeydown = () => !hasInteracted ? interaction() : null;

function interaction() {
    hasInteracted = true;
    playMusic();
};

function playMusic() {
    hasInteracted = true;
    const audio = new Audio(`/assets/music${Math.floor(Math.random() * 4) + 1}.mp3`);
    audio.volume = 0.2;
    audio.play();
    audio.onended = () => playMusic();
}

function showGames() {
    const gamesDiv = document.getElementById("games");
    if (gamesDiv.innerHTML) return;
    
    games.forEach(gameName => {
        const gameScript = document.createElement("iframe");
        gameScript.src = `https://cdn.htmlgames.com/${gameName}`;
        gamesDiv.appendChild(gameScript);
    });
}