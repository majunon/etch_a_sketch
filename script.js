const container = document.querySelector('.container');
const buttonClear = document.querySelector('#clear');
let gridSize = 16;

function createGrid(sizeOfGrid){
  //First remove all the pixels (i.e. childs of .container)
  let toRemove = document.querySelectorAll('.pixel');
  for(let i=0;i<toRemove.length;i++){
    toRemove[i].remove();
  }
  //Then create as many divs you need
  for(let i=0;i<(sizeOfGrid*sizeOfGrid);i++){
    let newDiv=document.createElement('div');
    newDiv.classList.add("pixel");
    container.appendChild(newDiv);
  }
  //Then style the css grid appropriately
  container.style.cssText+=`grid-template-columns: repeat(${sizeOfGrid},1fr); grid-template-rows: repeat(${sizeOfGrid},1fr);`
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach(pixel => pixel.style.cssText+=`width:calc(500px/${sizeOfGrid});height:calc(500px/${sizeOfGrid});`);
  //Then listen to mouseover for coloring pixels
  pixels.forEach(pixel => pixel.addEventListener('mouseover',function(e){
    this.classList.add("colored");
  }));
  //Then listen to the clear button to clear the grid
  buttonClear.addEventListener('click',function(e){
    pixels.forEach(function(ee){
      if(ee.classList.contains("colored")){
        ee.classList.remove("colored");
      }
    })
  });
};

createGrid(gridSize);

const buttonSize = document.querySelector('#size');

buttonSize.addEventListener('click',function(e){
  gridSize = prompt("Grid size ?");

  pixels=createGrid(gridSize);
})
