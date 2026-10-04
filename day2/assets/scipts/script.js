

const prev = document.getElementById("prev");
const next = document.getElementById("next");
const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update(){
    // making circles active 
    circles.forEach((circle , idx) => {
        if(idx < currentActive){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }
    })
    // updating the progress bar 
    const actives = document.querySelectorAll('.active');
    const precentageWidth = ((actives.length - 1) / (circles.length - 1)) * 100 ;
    progress.style.width = precentageWidth + '%';
    // code for prev and next being disabled
    if(currentActive == 1){
        prev.disabled = true;
    }else if(currentActive === circles.length){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
}