const container = document.getElementById("container")
gerapagina()
function gerapagina(n =16){
         
        let alturaelargura = 720/n
        
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
                        grid.style.backgroundColor = "black";
                })
                gridrow.appendChild(grid)
        }
                container.appendChild(gridrow)
        }
}
function popUp (){
        let i = prompt("Insira um numero de 1 a 100:")
        container.innerHTML=""
        gerapagina(i)
}

function randomizeColor(){
        return Math.random()*16773120 +1
}