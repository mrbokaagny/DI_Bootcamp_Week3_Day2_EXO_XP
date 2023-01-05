let container = document.getElementById('container')
let over = false 

container.ondragstart = (event) =>{
    container.setAttribute('style' , 'background-color:red')
}

container.ondragend = (event) =>{
    container.setAttribute('style' , 'background-color:black')
    let posX = event.clientX
    let posY = event.clientY
    event.target.style.left = posX + "px";
    event.target.style.top = posY + "px";
    event.target.style.position = "absolute"; 
}

container.onmouseover = () =>{
    if(!over){
        alert('Heyy !! Bien le jour 👌')
        over = true 
    }
}

container.onmouseout = (event) =>{
    event.target.style.width = "70px";
    event.target.style.height = "70px";
}