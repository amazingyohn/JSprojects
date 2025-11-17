function playGame(){
    let score = 0

    function increaseScore(point){
        score += point
        console.log(`score have been increased by +${point} points`)
    }

    function decreaseScore(point){
        score -= point
        console.log(`score have been reduced to -${point} points`)
    }

    function getScore(){
        console.log(`your scores are ${score}`)
    }

    return(increaseScore, decreaseScore, getScore)
}


// const game = playGame()

// console.log(typeof game)
// game.decreaseScore(6)