var button = document.querySelectorAll("button");
var homeScore = document.querySelector("#home")
var guestScore = document.querySelector("#guest")

const MAX_SCORE = 99

const limitScore = (score) => {
   return Math.min(score, MAX_SCORE)
}

function increaseScore (item) {
    var parent = item.parentElement.id
    var number = parseInt(item.textContent)
    if(parent === "home-board") {
        homeScore.textContent = limitScore(number + parseInt(homeScore.textContent))
    } else if(parent === "guest-board") {
        guestScore.textContent = limitScore(number + parseInt(guestScore.textContent))
    }

}

button.forEach((item) => item.addEventListener("click", () => increaseScore(item)))