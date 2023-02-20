let homeScore = 0
let guestScore = 0

let finalScoreHome = document.getElementById("home")
let finalScoreGuest = document.getElementById("guest")

function add(count, id){
    if (id === "guest") {
        addGuest(count);
        return
    }
    
    addHome(count)
}

function addHome(count) {
    homeScore += count
    finalScoreHome.textContent = homeScore
}

function addGuest(count) {
    guestScore += count
    finalScoreGuest.textContent = guestScore
}
