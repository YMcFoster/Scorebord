// Scripts for the Home score

let scoreLine1 = 0

let score = document.getElementById("score-line")

function plusOne() {
    scoreLine1 += 1
    
   score.textContent = scoreLine1
   
}

function plusTwo() {
    scoreLine1 += 2
   score.textContent = scoreLine1 
}

function plusThree() {
    scoreLine1 += 3
    score.textContent = scoreLine1
}

// Scripts for the guest scores

let scoreLine2 = 0
let score2 = document.getElementById("score-line-2")

function plusOne1() {
    scoreLine2 += 1
    
   score2.textContent = scoreLine2
   
}

function plusTwo2() {
    scoreLine2 += 2
   score2.textContent = scoreLine2 
}

function plusThree3() {
    scoreLine2 += 3
    score2.textContent = scoreLine2
}