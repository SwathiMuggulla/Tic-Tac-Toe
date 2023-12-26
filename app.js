let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");

let turnO=true;
let flag=0;
let count=0;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame =() =>{
    turnO=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="X";
            box.style.color="blue";
            turnO=false;
        }
        else{
            box.innerText="O";
            box.style.color="pink";
            turnO=true;
        }
        box.disabled=true;
        count+=1;
        checkWinner();
    });
});

const enableBoxes =() => {
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const disableBoxes =() => {
    for (let box of boxes){
        box.disabled=true;
    }
}
const showWinner = (winner) =>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    count=0;
    flag=0;
}

const checkWinner = () => {
    for (let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val===pos3Val){
            flag=1;
            showWinner(pos1Val);
        }
    }

}
if(count==9 && flag==0){
    draw();
}
}


const draw =() =>{
    msg.innerText="Game has no Winners";
    msgContainer.classList.remove("hide");
    count=0;
    flag=0;
}
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);