let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let msg_container=document.querySelector(".msg-container");
let new_btn=document.querySelector("#new-btn");
let para=document.querySelector("#para");


let turn0=true;  // it will print on the btn either 0 or 1 on the basis of turn

const winpatterns=[

    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{

        console.log("box was clicked");
        
        //   print in the box the value of X or 0

        if(turn0==true){
            box.innerText='0';
            turn0=false;
        }
        else{
            box.innerText='X';
            turn0=true;
        }

        box.disabled=true;                       ///  imp*****  nce a box is clicked it become disabld 

        checkWinner();
    });
});






const enabled=() =>{
    
    for (let box of boxes){

        box.disabled=false;
        box.innerText=""
    }
}




const reset=() =>{
    turn0=true;
    enabled();
    msg_container.classList.add("hide");

}






const disabled=() =>{
    
    for (let box of boxes){

        box.disabled=true;
    }
}





const showWinner =(winner) =>{

    para.innerText=`Congratulations Winner is ${winner}`;
    msg_container.classList.remove("hide");
    disabled();
}





const checkWinner=() =>{

    for (let pattern of winpatterns){
        let pos1value= boxes[pattern[0]].innerText;
        let pos2value= boxes[pattern[1]].innerText;
        let pos3value= boxes[pattern[2]].innerText;

        if(pos1value!=""   &&  pos2value!=""  &&  pos3value!=""){
            if(pos1value==pos2value && pos2value==pos3value){
                console.log("winner ", pos1value);
                showWinner(pos1value);
            }
        }

    }

};



resetBtn.addEventListener("click", reset);
new_btn.addEventListener("click", reset);