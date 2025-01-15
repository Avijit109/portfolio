let toggle=document.querySelector('.toggler');
let navlinks=document.querySelector('.nav-links');

toggle.addEventListener('click',listDisplay)

function listDisplay(){
    navlinks.classList.toggle('showList');
}