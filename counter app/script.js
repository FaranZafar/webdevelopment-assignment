let count= 0;

const countdisplay=document.getElementById("count");
const increaseBtn =document.getElementById("increase");
const decreaseBtn=document.getElementById("decrease")
const resetBtn=document.getElementById("reset");

function updateCounter(){
    countdisplay.textContent=count;
}

// increase button
increaseBtn.addEventListener("click" ,function(){
    count++;
    updateCounter();
});

// Decrease button

decreaseBtn.addEventListener("click",function(){
    count--;
    updateCounter();
});

// reset button 
resetBtn.addEventListener("click",function(){
  count=0;
  updateCounter();
});