const character = document.getElementById("character");
const block = document.getElementById("block");
const game = document.getElementById("game");




const checkDead = setInterval(function(){
    const characterTop = parseInt(window.getComputedStyle(character)
    .getPropertyValue("top"));
    const blockLeft = parseInt(window.getComputedStyle(block)
    .getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && characterTop>=130) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("You lose! Refresh to try again.");
    }
}, 10)

function jump(){
    character.classList.add("animate")
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
};
game.addEventListener("click", jump);

alert(`Game starts right away!
click in box to jump`)