// declaration de la variable allBoldItems
let allBoldItems


function getBold_items() {
    // recuperation de tout les elements en gras
    allBoldItems = document.querySelectorAll('p strong')
    console.log(allBoldItems)
}

function highlight(){
    allBoldItems.forEach(element => {
        element.setAttribute('style' , 'color:blue')
    });
}

function return_normal(){
    allBoldItems.forEach(element => {
        element.setAttribute('style' , 'color:black')
    });
}


// recuperation du paragraphe 
let paragraphe = document.querySelector('p')

getBold_items()

paragraphe.addEventListener('mouseover' , highlight)
paragraphe.addEventListener('mouseout' , return_normal)