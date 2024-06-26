let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let newgame=document.querySelector(".newgame");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");

let turn=true;

let winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame=()=>{
    turn=true;
    btnenable();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn){
            box.innerText="X";
            box.classList.add("color")
            turn=false;
        }else{
            box.innerText="O";
            turn=true;
}
        box.disabled=true;
        checkwinner();
    })
});

const btndisable=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
};

const btnenable=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showwinner=(winner)=>{
    msg.innerText=`Congratulation,Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    btndisable();
    
}

const checkwinner=()=>{
    for(let patten of winpatterns){
        let posvalue1=boxes[patten[0]].innerText;
        let posvalue2=boxes[patten[1]].innerText;
        let posvalue3=boxes[patten[2]].innerText;
        if(posvalue1 != "" && posvalue2 != "" && posvalue3 != ""){
            if(posvalue1 === posvalue2 && posvalue2 === posvalue3){
                showwinner(posvalue1);
                
                
            }
        }
    }
};

newgame.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
    
