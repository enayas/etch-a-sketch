const container = document.querySelector(".container");



let div;

for(let i=0; i<16; i++){
  for(let j=0; j<16; j++){
    div = document.createElement("div");
    div.classList.add("square");
    div.style.width= "40px";
    div.style.height="40px";
    container.appendChild(div);
  }
}

const squares = document.querySelectorAll(".square");

squares.forEach((square)=>{
  square.addEventListener('mouseover', ()=>{
    square.style.backgroundColor = "navy";
    square.style.border = "none";
  })
})


const button = document.querySelector("button");
button.addEventListener('click', ()=>{
  const input = prompt("Please enter a grid number between 1 and 100:", );
  if(input === null){
    return;
  }
  const number = parseInt(input, 10);

  if(!isNaN(number)){
    if(number > 100 || number < 1){
      alert("Invalid prompt. Please enter a number between 1 and 100.")
    } else {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      for(let i=0; i<number; i++){
        for(let j=0; j<number; j++){
          const div = document.createElement("div");
          div.classList.add("square");
          div.style.width= `${640/number}px`;
          div.style.height= `${640/number}px`;
          container.appendChild(div);
        }
      }

      const squares = document.querySelectorAll(".square");

      squares.forEach((square)=>{
        square.addEventListener('mouseover', ()=>{
          square.style.backgroundColor = "navy";
          square.style.border = "none";
        })
      })
    }
  } else {
    alert("Invalid prompt. Please enter a number.")
  }
})

