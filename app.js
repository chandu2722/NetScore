
const addblue=document.querySelector('#addblue');
const blueul=document.querySelector('#blueplayer');
const addred=document.querySelector('#addred');
const redul=document.querySelector('#redplayer');



addblue.addEventListener('click',function(){
    let playerName=prompt("Enter the Blue Player Name");
    let li=document.createElement('li');
    li.innerText=playerName;
    li.style.fontWeight='bold';
    li.style.fontSize='30px';
    blueul.appendChild(li);

    // let span=document.createElement('span');
    // span.innerHTML=`=${score}`;
    // li.appendChild(span);

})

addred.addEventListener('click',function(){
    let playerName=prompt("Enter the Red Player Name");
    let li=document.createElement('li');
    li.innerText=playerName;
    li.style.fontWeight='bold';
    li.style.fontSize='30px';
    redul.appendChild(li);

    // let span=document.createElement('span');
    // span.innerHTML=`=${score}`;
    // li.appendChild(span);

})

const bplus=document.querySelector('#bplus');

const rplus=document.querySelector('#rplus');


const bscore=document.querySelector('#t1score');


let isGameOver=false;
const div=document.querySelector('#score');
const winmsg=document.getElementById('#winmsg');
bplus.addEventListener('click',function(){
    
    if(!isGameOver){
        let score=Number(bscore.innerText);
    if(score===15){
        isGameOver=true
        bscore.style.color="green";
        rscore.style.color="red";
        let msg="Blue Team Win";
        let h=document.createElement('h4');
        h.innerText=msg;
        h.style.color="green";
        h.style.textAlign='center';
        div.appendChild(h);
    }
    else{
        bscore.innerText=score+1;
    }
    }
    
    
})



let rscore=document.querySelector('#t2score');

rplus.addEventListener('click',function(){
    if(!isGameOver){
        let score=Number(rscore.innerText);
    if(score===15){
        isGameOver=true
        rscore.style.color="green";
        bscore.style.color="red";
        let msg="Red Team Win";
        let h=document.createElement('h4');
        h.innerText=msg;
        h.style.color="green";
        h.style.textAlign='center';
        div.appendChild(h);
    }
    else{
        rscore.innerText=score+1;
    }
    }
})











