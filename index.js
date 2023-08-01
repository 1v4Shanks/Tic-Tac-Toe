let musicc=new Audio("sound/music.mp3");
let audioTurn=new Audio("sound/ting.mp3");
let gameover=new Audio("sound/gameover.mp3");
let turn="X";
let isgameover=false;
musicc.play();

//function to change the turn
const changeTurn=()=>{
        return turn ==="X"? "O" :"X";
}

//stop function
let stop=()=>{
    return turn="";
}
//function to check for a win

const checkWin=()=>{
    let boxtext=document.getElementsByClassName("boxtext");
    let win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    win.forEach((e)=>{
        if((boxtext[e[0]].innerText===(boxtext[e[1]].innerText)) && (boxtext[e[1]].innerText===(boxtext[e[2]].innerText))&& boxtext[e[0]].innerText!==""){
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " won";
            isgameover=true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="200px";
            gameover.play();
            stop();
        }
    })
}


//game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector(".boxtext")
    element.addEventListener("click", ()=>{
    if(boxtext.innerText === ""){
        boxtext.innerText= turn;
        turn = changeTurn();
        audioTurn.play();
        checkWin();
        if(!isgameover){
        document.getElementsByClassName("info")[0].innerText=`turn for ${turn}`;
        }
    }
})
})



const reset=document.getElementById("reset").addEventListener("click",resetFunction=()=>{
    let boxes=document.getElementsByClassName("box");
    Array.from(boxes).forEach(element=>{
        let boxtext=element.querySelector(".boxtext");
        boxtext.innerText="";
        turn="X";
        document.getElementsByClassName("info")[0].innerText=`turn for ${turn}`;
        document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="0";

    })
})

