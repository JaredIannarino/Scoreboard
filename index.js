let homeScoreElem = document.getElementById("home-score")
let homeScore = 0
function add1Home() {
    homeScore += 1
    homeScoreElem.textContent = homeScore
}

function add2Home() {
    homeScore += 2
    homeScoreElem.textContent = homeScore
}

function add3Home() {
    homeScore += 3
    homeScoreElem.textContent = homeScore
}

let guestScoreElem = document.getElementById("guest-score")
let guestScore = 0
function add1Guest() {
    guestScore += 1
    guestScoreElem.textContent = guestScore
}

function add2Guest() {
    guestScore += 2
    guestScoreElem.textContent = guestScore
}

function add3Guest() {
    guestScore += 3
    guestScoreElem.textContent = guestScore
}