let player = {
    name: "Per",
    chips: 200
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;