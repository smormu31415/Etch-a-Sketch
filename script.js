const container = document.getElementById("container")
function gerapagina(n =16){

         
        let alturaelargura = 710/n
        
        for(let k= 0; k <n; k++){
        const gridrow = document.createElement("div")
        gridrow.style.display = "flex"
        
        for(let i = 0; i < n; i++){
                const grid = document.createElement("div")
                grid.classList.add("grid")
                grid.style.width = alturaelargura + "px";
                grid.style.height = alturaelargura + "px";
                grid.style.display = "flex"
                grid.style.backgroundColor = "white"
                grid.addEventListener("mouseenter",(e) =>{
                        if (grid.style.backgroundColor === "white"){
                        grid.style.backgroundColor = getRandomColor();
                        }
                        grid.style.opacity = Number(grid.style.opacity)+0.1;
                })
                gridrow.appendChild(grid)
        }
                container.appendChild(gridrow)
        }
}

gerapagina()

function popUp (){
        let i = prompt("Insira um numero de 1 a 100:")
        if (i>100){
                window.alert("ERRO, INSIRA UM NUMERO MENOR")
                popUp()
        }

        else {
        container.innerHTML=""
        gerapagina(i)
        }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
