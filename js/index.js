// Your code goes here

const divButtons = document.querySelectorAll('.btn')

console.log(divButtons)

divButtons.forEach((button)=>{
    button.addEventListener('click', (e)=>{e.target.style.backgroundColor = 'blue'})
    button.addEventListener('dblclick', (e)=>{e.target.style.backgroundColor = '#17A2B8'})
})

const pTags = document.querySelectorAll('p')

const logo = document.querySelector('h1')

logo.addEventListener("mouseover", (e)=>{e.target.style.backgroundColor = 'yellow'});
logo.addEventListener("mouseout", (e)=>{e.target.style.backgroundColor = 'white'});

document.addEventListener('keydown', logKey)

function logKey(e) {
    pTags[0].textContent += ` ${e.code}`;
  }
  const divs = document.querySelectorAll('div');

function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    console.log(divs)
    // Apply scale transform
    divs[0].style.transform = `scale(${scale})`;

    event.stopPropagation()
}
  
  let scale = 1;

  divs[0].addEventListener('wheel', zoom)


  window.addEventListener('load', (event) => {
    alert('page is fully loaded');
  });

  
  const header = document.querySelector('header')

  header.addEventListener('focus', (event) => {
    event.target.style.background = 'pink';    
  });
  

  const navbar = document.querySelector(".container.nav-container")
  


navbar.addEventListener('scroll', (e)=>{
    if(e > 0){
        navbar.target.style.opacity = ".4"
    }
    else {
        navbar.target.style.opacity = "1"
    }
})

{/* <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
    <script type="text/javascript">
        $(document).ready(function(){
        $(window).scroll(function(){
                if($(this).scrollTop() > 0){
                    $(".nav-container").css({"opacity" : "0.4"})
                }
                else {
                    $(".nav-container").css({"opacity" : "1"})
            }
            })
         })
  </script> */}

  const input = document.querySelector("input")

  input.addEventListener('select', (event)=>{
  const log = document.getElementById('log');
  const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
  log.textContent = `You selected: ${selection}`;
  })




  const pic =document.querySelector("img")

  pic.addEventListener("dblclick", (e)=>{
      e.target.style.display = "none"
  })

 const navLink = document.querySelectorAll(".nav-link")

 navLink.forEach((link)=>{
     link.preventDefault()
 })