console.log("script running...");
const inputbox=document.getElementById("input-box");
const listcontainer=document.getElementById("li-container");

function addtask(){
    let ibv=inputbox.value.trim();
    if(ibv === ''){
        alert(" please enter your task");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u2716";
        li.appendChild(span);
       
    }
    inputbox.value = '';
}

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
});
