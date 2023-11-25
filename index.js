


const header = document.querySelector('header ')
const nav = document.querySelector('nav')
const navBtn = document.querySelector('.toggle-bars')
const navBar = document.querySelectorAll('.fa-solid')
const hero = document.querySelector('.hero')
const dot = document.querySelector('.dots')
const typed = document.querySelector('.type-1')
const typed2 = document.querySelector('.type-2')
const topBtn = document.querySelector('.to-top')
const footerYear = document.querySelector('footer h3')


//typer function
// let dotS= new Typed(dots,{
//     strings: ["","..."],
//     typeSpeed: 100,
//     backSpeed: 140,
//     loop: true,
//     smartBackspace: true
// })
let typer= new Typed(typed,{
    strings: ["","Frontend Developer","Software Developer", "Web Developer", "Web Designer",],
    typeSpeed: 120,
    backSpeed: 80,
    loop: true,
    smartBackspace: true
})
let typers= new Typed(typed2,{
    strings: ["","Frontend Developer","Software Developer", "Web Developer", "Web Designer",],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
    smartBackspace: true
})

//sticky scroll and to-top button
window.addEventListener('scroll',()=>{

    let windowHeight = window.scrollY

    if(windowHeight >= 5){
        header.classList.add('sticky')
        topBtn.classList.add('to-top-show')
        dot.style = `color: white;`
    }else{
        header.classList.remove('sticky')
        topBtn.classList.remove('to-top-show')
        dot.style = `color: rgb(93, 189, 93);`
    }
})

//nav 
navBtn.addEventListener('click',()=>{
    navBar.forEach((btn)=>{
        nav.classList.toggle('show-nav')
        btn.classList.toggle('hidden')
    })
})
//to rest the navbar when the window is resized
window.addEventListener('resize',()=>{
    nav.classList.remove('show-nav')
    
    if(window.screen.width <= 768){    
        navBar.forEach((btn)=>{
            if(btn.classList.contains('fa-xmark') && !btn.classList.contains('hidden') ){
                btn.classList.add('hidden')
            }else if(btn.classList.contains('fa-bars-staggered') && btn.classList.contains('hidden')){
                btn.classList.remove('hidden')
            }
        })
    }
    
})
// get the year
let date = new Date().getFullYear()
footerYear.textContent +=  date

//theme modes
// theme.addEventListener('click', ()=>{
//     let light = body.classList
    
//     if(light.contains('light-mode')){
//         light.replace('light-mode','dark-mode')
//         themeBtn.style =`translate: 9px; background: #fff;`
//         theme.style = ` border: 2px solid white;`
//         themeTxt.innerHTML="Dark Mode"
//     }else if(light.contains('dark-mode')){
//         light.replace('dark-mode','light-mode')
//         themeBtn.style = `translate: -9px; background: #000;`
//         theme.style = ` border: 2px solid black;`
//         themeTxt.innerHTML='Light Mode'
//     }
// })