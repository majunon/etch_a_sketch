const container = document.querySelector('.container');

for(let i=0;i<(16*16);i++){
  let newDiv=document.createElement('div');
  newDiv.classList.add("pixel");
  container.appendChild(newDiv);
}

const pixels = document.querySelectorAll('.pixel');

pixels.forEach(pixel => pixel.addEventListener('mouseover',function(e){
  this.classList.add("colored");
}));
