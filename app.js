///setting footer date class
document.querySelector('.date').innerHTML=new Date().getFullYear()

// close links
const navToggle=document.querySelector('.nav-toggle')
const linksContainer=document.querySelector('.links-container')
const links=document.querySelector('.links')

//activate toggle button
navToggle.addEventListener('click',function(){
    linksContainer.classList.toggle('show-links')
}) 

//fiexed NavBar