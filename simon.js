let gameSeq = [];
let userSeq =[];
let buttons = ["red","purpule","green","yellow"];
let level = 0;
let started = false;
let highestScore = localStorage.getItem("highestScore") ? Number(localStorage.getItem("highestScore")) : 0;

let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
h3.innerText = `heigher score is ${highestScore}`

document.addEventListener("keypress",function(){
    if(started === false){
        started = true;
    };
    levelUp();
});

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `level is : ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = buttons[randIdx];
    let randomBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    flashBtn(randomBtn);
};

function flashBtn(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}


let btns = document.querySelectorAll(".btn");
for(let btn of btns){
    btn.addEventListener("click",pressBtn);
}

function pressBtn(){
    let btn = this;
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length-1);
}

function checkAns(idx){
    if(gameSeq[idx] === userSeq[idx]){
        if(gameSeq.length === userSeq.length){
            setTimeout(() => {
                levelUp();
            }, 1000);
        }
    }else{
        if (level > highestScore) {
            highestScore = level;
            localStorage.setItem("highestScore", highestScore); // Save highest score
            h3.innerText = `Highest score is ${highestScore}`;
        }
        h2.innerHTML = `Game over your score is <b>${level}</b></br> press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 250);
        reset();
    }
}

function reset(){
    level = 0;
    started = false;
    gameSeq=[];
    userSeq=[];
}