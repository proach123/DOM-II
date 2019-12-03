// Your code goes here

const divButtons = document.querySelectorAll('.btn')

console.log(divButtons)

divButtons.forEach((button)=>{
    button.addEventListener('click', (e)=>{e.target.style.backgroundColor = 'blue'})
})


const logo = document.querySelector('h1')

logo.addEventListener("mouseover", (e)=>{e.target});


