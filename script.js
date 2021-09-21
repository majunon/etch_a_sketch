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

const buttonClear = document.querySelector('#clear');

buttonClear.addEventListener('click',function(e){
  pixels.forEach(function(ee){
    if(ee.classList.contains("colored")){
      ee.classList.remove("colored");
    }
  })
});

const buttonSize = document.querySelector('#size');

buttonSize.addEventListener('click',function(e){
  let gridSize = prompt("Grid size ?");
})
