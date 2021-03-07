///setting footer date class
document.querySelector('.date').innerHTML=new Date().getFullYear()

// close links
const navToggle=document.querySelector('.nav-toggle')
const linksContainer=document.querySelector('.links-container')
const links=document.querySelector('.links')


//activate toggle button
navToggle.addEventListener('click',function(){

    ////getBounding gives details of selected item
const containerHeight= linksContainer.getBoundingClientRect().height
const linksHeight=links.getBoundingClientRect().height

    if(containerHeight===0){
    linksContainer.style.height=`${linksHeight}px`
    }else{
        linksContainer.style.height=0;
    }
}) 

// Fixed Nav bar
const navbar= document.getElementById('nav')
const topLink= document.querySelector('.top-link')
window.addEventListener('scroll',function(){
    const scrollHeight= window.pageYOffset;
    const navHeight=navbar.getBoundingClientRect().height
    if(scrollHeight>navHeight){
        navbar.classList.add('fixed-nav')
    }else{
        navbar.classList.remove('fixed-nav')
    }

    if(scrollHeight>500){
        topLink.classList.add('show-link')
    }else{
        topLink.classList.remove('show-link')
    }
})