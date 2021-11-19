const bread = document.getElementById('bread');
const jam = document.getElementById('jam');
const score = document.getElementById('score');
const button = document.getElementById('button');

let isCollision = false
let speed = 1.5

function jump () {
    if (bread.classList.contains('jump-animation')) {
        return
    }
    bread.classList.add('jump-animation');
    setTimeout(() => {
        bread.classList.remove('jump-animation');
    },550)
}

function collision () {
    isCollision = true
    $("#jam").css("animation-play-state", "paused");
    $("#jam").hide()
    $("#bread").css("background-image", "url(jamed.png)")

    $(document).off('keypress', jump) 
    $(document).off('click', jump)

    $("#info-box").show()

    $(document).on('keypress', playAgain)
}

function playAgain () {
    location.reload()
}

$(document).on('keypress', jump)
$(document).on('click', jump)

$("#play-again").on('click', playAgain)

let interval = setInterval(() =>{
    score.innerText++;

    if (isCollision) {
        clearInterval(interval);
    }

    const breadTop = parseInt(window.getComputedStyle(bread)
    .getPropertyValue('top'));
    const jamLeft = parseInt(window.getComputedStyle(jam)
    .getPropertyValue('left'));

    if (score.innerText % 5 === 0 && speed > 0.8) {
        speed -= 0.001
        // change jam speed
        $("#jam").css("animation-duration", speed + 's');
        console.log(speed);
    }
  
    if (jamLeft < 50 && jamLeft > 0 && breadTop > 150) {
        collision()
        //    alert("You got a score of: " + score.innerText + 
        //    "\n\nPlay again?");
        //    location.reload()
    }



}, 50);