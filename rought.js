let value1=document.getElementById("value1");
let value2=document.getElementById("value2");
let value3=document.getElementById("value3");

let startbutton=document.getElementById("start");
let result=document.getElementById("result");

const values = ["🍒", "🍋", "🍌", "🍉", "🍓"];

function getRandomValue(){
    //math.random () function always give values b/w 0-1
    return values[Math.floor(Math.random()* (values.length))];
}

let d;

function startSlotMachine(){
    if(d) clearInterval(d);//ye hai taki by chance ho to clear ho jaye
    d=setInterval(() => {
        value1.innerText=getRandomValue();
        value2.innerText=getRandomValue();
        value3.innerText=getRandomValue();
    }, 100);

    setTimeout(() => {
        clearInterval(d);
        checkResult();
    }, 1000);
}

function checkResult(){
    let v1=value1.innerText;
    let v_2=value2.innerText;
    let v_3=value3.innerText;

    if(v1==v_2 && v_2==v_3){
        result.innerText="JACKPOTTTT :)";
        result.style.color="gold";
    }
    else{
        result.innerText="TRY AGAIN :(";
        result.style.color="white";

    }
}

startbutton.addEventListener("click",startSlotMachine);
