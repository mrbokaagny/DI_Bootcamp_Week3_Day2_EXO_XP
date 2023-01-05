// recuperation du formulaire
console.log('--- recuperation du formulaire ------')
let globalForm = document.forms[0]
console.log(globalForm)



// recuperation des entrées par leur name 
let firstName = globalForm.elements.fname
console.log('--- première entrer -----------------')
console.log(firstName)
let secondName = globalForm.elements.lname
console.log('--- second entrer -----------------')
console.log(secondName)


let baliseUl = document.querySelector('.usersAnswer')

// fonction declencher au submit du formulaire
function sendForm(event){
    event.preventDefault()
    if(firstName.value=="" && secondName.value== ''){
        alert('Prière de renseigner les informations demandées')
    }else{
        let frstLi = document.createElement('li')
        let scndLi = document.createElement('li')
        frstLi.textContent = firstName.value
        scndLi.textContent = secondName.value
        baliseUl.appendChild(frstLi)
        baliseUl.appendChild(scndLi)
        console.log(baliseUl)
    }
}