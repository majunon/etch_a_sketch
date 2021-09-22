const container = document.querySelector('.container');
const buttonClear = document.querySelector('#clear');

let gridSize = 16;
let colorClass = "black";


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
    //this.classList.add(colorClass);
    switch(colorClass){
      case "black":
        this.classList.add(colorClass);
      break;
      case "rainbow":
        this.style.cssText+=`background-color:rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255});`
      break;
      case "shade":
        if(this.style.backgroundColor==="rgba(0, 0, 0, 0)"){
          this.style.backgroundColor="rgba(0,0,0,0.1)";
        }
        else if(this.style.backgroundColor==="rgba(0, 0, 0, 0.1)"){
          this.style.backgroundColor="rgba(0,0,0,0.2)";
        }
        else if(this.style.backgroundColor==="rgba(0, 0, 0, 0.2)"){
          this.style.backgroundColor="rgba(0,0,0,0.3)";
        }
        else if(this.style.backgroundColor==="rgba(0, 0, 0, 0.3)"){
          this.style.backgroundColor="rgba(0,0,0,0.4)";
        }
        else if(this.style.backgroundColor==="rgba(0, 0, 0, 0.4)"){
          this.style.backgroundColor="rgba(0,0,0,0.5)";
        }
        else if(this.style.backgroundColor==="rgba(0, 0, 0, 0.5)"){
          this.style.backgroundColor="rgba(0,0,0,0.6)";
        }
        else if(this.style.backgroundColor==="rgba(0, 0, 0, 0.6)"){
          this.style.backgroundColor="rgba(0,0,0,0.7)";
        }
        else if(this.style.backgroundColor==="rgba(0, 0, 0, 0.7)"){
          this.style.backgroundColor="rgba(0,0,0,0.8)";
        }
        else if(this.style.backgroundColor==="rgba(0, 0, 0, 0.8)"){
          this.style.backgroundColor="rgba(0,0,0,0.9)";
        }
        else if(this.style.backgroundColor==="rgba(0, 0, 0, 0.9)"){
          this.style.backgroundColor="rgba(0,0,0,1)";
        }
      break;
    }
  }));

};

createGrid(gridSize);

buttonClear.addEventListener('click',function(e){
  createGrid(gridSize);
});

const buttonSize = document.querySelector('#size');

buttonSize.addEventListener('click',function(e){
  gridSize = prompt("Grid size ?");
  if(gridSize>100){gridSize=100;}

  createGrid(gridSize);
})

const buttonRainbow = document.querySelector('#rainbow');

buttonRainbow.addEventListener('click',function(e){
  colorClass="rainbow";
})

const buttonShades = document.querySelector('#shade');

buttonShades.addEventListener('click',function(e){
  colorClass="shade";
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach(pixel => pixel.style.cssText="background-color:rgba(0,0,0,0);");
})
