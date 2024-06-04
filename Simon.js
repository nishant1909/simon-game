let body=document.querySelector('body');
let h3= document.querySelector('h3');

let colors=['red', 'blue', 'green', 'orange'];

let highest=0;

let gamSeq=[];
let userSeq=[];

let level=0;
let pr=false;

body.addEventListener('keypress',function(){
    if (pr==false){
        pr=true;
        
        levelUp();
    }
})

function over(){
    body.classList.add('over');
    setTimeout(function(){
        body.classList.remove('over');
    },150);
}

function gamebtnflash(btn) {
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },150);
}

function userbtnflash(btn){
    btn.classList.add('click');
    setTimeout(function(){
        btn.classList.remove('click');
    },150);
}

function levelUp(){
    userSeq=[];
    level++;
    h3.innerText=`Level ${level}`;

    let ranInd=Math.floor(Math.random()*3);
    let ranColr=colors[ranInd];
    let ranBtn=document.querySelector(`.${ranColr}`);
    gamSeq.push(ranColr);
    gamebtnflash(ranBtn);
}

function check(indx){
    if (gamSeq.length===0){
        h3.innerText='Please Enter any Key First to Start Game.';
    }else if (gamSeq[indx]===userSeq[indx]){
        if (gamSeq.length==userSeq.length){
            setTimeout(levelUp,700);
        }
    }else{
        if ((level-1)>highest){
            highest=level-1
        }
        h3.innerHTML=`Game Over! Higghest score ${highest} Your score is ${level -1}<br>Press any key to Restart.`
        over();
        pr=false;
        gamSeq=[];
        level=0;
    }
}

function btnPress(){
    let btn=this;
    userbtnflash(btn);
    userColr=btn.getAttribute('id');
    userSeq.push(userColr);

    check(userSeq.length-1);
}

let btns=document.querySelectorAll('.box');
for (btn of btns){
    btn.addEventListener('click',btnPress);
}

