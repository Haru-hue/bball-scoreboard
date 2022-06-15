var button = document.querySelectorAll("button");
var homeScore = document.querySelector("#home")
var guestScore = document.querySelector("#guest")

function increaseScore (item) {
    var parent = item.parentElement.id
    const number = parseInt(item.textContent)
    if(parent === "home-board") {
        console.log("true")
        homeScore.textContent = number + parseInt(homeScore.textContent)
    } else if(parent === "guest-board") {
        console.log("false")
        guestScore.textContent = number + parseInt(guestScore.textContent)
    }
}

button.forEach((item) => item.addEventListener("click", () => increaseScore(item)))