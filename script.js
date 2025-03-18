function showMessage() {
    document.getElementById('hidden-message').style.display = 'block';
}

function showCake() {
    document.getElementById('cake').style.display = 'block';
}

function playMusic() {
    let music = document.getElementById('bg-music');
    music.play();
    alert("Enjoy the birthday song! 🎶");
}