// recuperons le h1 
let bigTitle = document.getElementsByTagName('h1')

console.log('------- le contenu de la balise h1 -------------------')
console.log(bigTitle[0].textContent)


// recuperons le dernier paragraphe de la balise article
console.log('-le contenu du dernier paragraphe de la balise article-')
let lastParagraphe = document.querySelectorAll('article p:last-child')
console.log(lastParagraphe[0].textContent)


// ecouter d'evenement sur le h2 ( modification de la couleur au click)
let mediumTitle = document.getElementsByTagName('h2')
mediumTitle[0].addEventListener('click' , function(){
    mediumTitle[0].setAttribute('style' , 'background-color:red')
})


// ecouter d'evenement sur le h3 ( masquer le h3 )
let smallTitle = document.getElementsByTagName('h3')
smallTitle[0].addEventListener('click' , function(){
    smallTitle[0].setAttribute('style' , 'display:none')
})

// mettre tout les paragraphes en gras on click sur le boutton
function toClick(){
 let allParagraphe = document.querySelectorAll('p')
 allParagraphe.forEach(element => {
    element.setAttribute('style' , 'font-weight:bolder')
 });
}

// modifier la taille sur h1 au survol de la souris
bigTitle[0].addEventListener('mouseover' , function(){

    let size = Math.floor(Math.random() * 101);
    bigTitle[0].setAttribute('style' ,`font-size:${size}px`)
    
})