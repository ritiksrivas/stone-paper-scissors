const btn=document.querySelectorAll(".btns");
const msg=document.querySelector("#textresult");
const yourscore=document.querySelector("#yourscore");
const compscore=document.querySelector("#compscore");
const choice1=document.querySelector("#choice1");
const choice2=document.querySelector("#choice2");
let userscore=0;
let comscore=0;


const compChoice=() => {
    const arr=["Stone","Paper","Scissors"];
    const index=Math.floor(Math.random()*3);
    return arr[index];
}


const output=(userwin) =>{
    if(userwin)
    {
        console.log("you Won");
        userscore++;
        yourscore.innerText=userscore;
        msg.innerText="You Won";
        msg.style.color="green";
    }
    else{
        console.log("computer is winner");
        comscore++;
        compscore.innerText=comscore;
        msg.innerText="Computer Won";
        msg.style.color="red";
    }
};

const playgame=(userChoice) => {
    console.log("your choice=",userChoice);
    const comChoice=compChoice();
    console.log("comp choice=",comChoice);
    


    if(userChoice===comChoice)
{
    console.log("tie");
    msg.innerText="Match Draw play again";
    msg.style.color="black";
    choice1.innerText=`${userChoice}`;
    choice2.innerText=`${comChoice}`;
}
else{
    let userwin=true;
     if(userChoice==="Stone"&&comChoice==="Paper")
{
    userwin=false;
    choice1.innerText="Stone";
    choice2.innerText="Paper";
}
else if(userChoice==="Paper"&&comChoice==="Stone")
{
    userwin=true;
    choice1.innerText="Paper";
    choice2.innerText="Stone";
}
else if(userChoice==="Paper"&&comChoice==="Scissors")
{
    userwin=false;
    choice1.innerText="Paper";
    choice2.innerText="Scissors";
}
else if(userChoice==="Scissors"&&comChoice==="Paper")
{
    userwin=true;
    choice1.innerText="Scissors";
    choice2.innerText="Paper";
}
else if(userChoice==="Scissors"&&comChoice==="Stone")
{
    userwin=false;
    choice1.innerText="Scissors";
    choice2.innerText="Stone";
}
else if(userChoice==="Stone"&&comChoice==="Scissors")
{
    userwin=true;
    choice1.innerText="Stone";
    choice2.innerText="Scissors";
}
output(userwin);
}
}


btn.forEach((btns) => {
btns.addEventListener("click",() => {
    const userChoice=btns.getAttribute("id");
    playgame(userChoice);
});
});

