           
let insertElemnt= document.querySelector('#compare')
let w = document.querySelector('#wins')
let l = document.querySelector('#losses')
let d = document.querySelector('#ties')
let score = JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    losses:0,
    tie:0
}
w.innerHTML=score.wins
l.innerHTML=score.losses
d.innerHTML=score.tie
function cal(x){
    let cmp = cp()
    let resele = document.querySelector('.result')
    resele.scrollIntoView()
    console.log(x)
    console.log(cmp)
    if((x=='rock' && cmp=='scissors') || (x=='paper' && cmp=='rock') || (x=='scissors' && cmp=='paper')){
        score.wins++
        resele.innerHTML="You Win"
        resele.id='result-win'
    }
    else if(x==cmp){
        score.tie++
        resele.innerHTML="Tie"
        resele.id='result-tie'
    }
    else{
        score.losses++
        resele.innerHTML="You Lose"
        resele.id='result-lose'
    }
    insertElemnt.innerHTML =  `<p id="left">You</p>
                            <div id="js-insert"></div>
                            <img src="images/${x}-emoji.png" alt="Paper" id="top">
                            <img src="images/${cmp}-emoji.png" alt="Rock">
                            <p>Computer</p>`
    w.innerHTML=score.wins
    l.innerHTML=score.losses
    d.innerHTML=score.tie
    localStorage.setItem('score',JSON.stringify(score))
    
}
function cp(){
    let r = Math.floor(Math.random()*3)+1
    if(r==1){
        return 'rock'
    }
    else if(r==2){
        return 'paper'
    }
    else if(r==3){
        return 'scissors'
    }
}
function reset(){
    score.wins=0
    score.losses=0
    score.tie=0
    w.innerHTML=score.wins
    l.innerHTML=score.losses
    d.innerHTML=score.tie
    localStorage.setItem('score',JSON.stringify(score))
}
