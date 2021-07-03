const aboutChelseaHiddenBar = document.querySelector("#header > span:nth-child(1) > p")
const aboutChelseaShowBar = document.querySelector(".about_chelsea_hidden_bar")
aboutChelseaHiddenBar.addEventListener("mousemove" , function(){
    aboutChelseaShowBar.classList.remove('hidden')
})
aboutChelseaHiddenBar.addEventListener("mouseleave",function(){
    aboutChelseaShowBar.classList.add('hidden')
})
const navHiddenBar = document.querySelector("#nav_bar > div.nav_main > span:nth-child(1) > p")
const navShowBar = document.querySelector(".nav_bar_JS")
navHiddenBar.addEventListener("mousemove" , function(){
    navShowBar.classList.remove('hidden')
})
navHiddenBar.addEventListener("mouseleave" , function(){
    navShowBar.classList.add('hidden')
})
const navBarColor = document.querySelector("#nav_bar")
const navBarColorText1 = document.querySelector('#nav_bar > div.nav_main > span:nth-child(1) > p')
const navBarColorText2 = document.querySelector('#nav_bar > div.nav_main > span:nth-child(2) > p')
const navBarColorText3 = document.querySelector('#nav_bar > div.nav_main > span:nth-child(3) > p')
const navBarColorText4 = document.querySelector('#nav_bar > div.nav_main > span:nth-child(4) > p')
const navBarColorText5 = document.querySelector('#nav_bar > div.nav_main > span:nth-child(5) > p')
const navBarColorText6 = document.querySelector('#nav_bar > div.nav_main > span:nth-child(6) > p')
const navBarColorText7 = document.querySelector('#nav_bar > div.nav_main > span:nth-child(7) > p')
const navBarColorText8 = document.querySelector('#nav_bar > div.nav_main > span:nth-child(8) > p')
const navBarColorText9 = document.querySelector('#nav_bar > div.nav_main > span:nth-child(9) > p')
const navBarColorText10 = document.querySelector('#nav_bar > div.nav_main > span:nth-child(10) > p')
const navBarColorText11 = document.querySelector('#nav_bar > div.nav_icons_login > div.nav_icon > i')
const navBarColorText12 = document.querySelector('#nav_bar > div.nav_icons_login > span:nth-child(3) > p')
const navBarColorText13 = document.querySelector('#nav_bar > div.nav_icons_login > span:nth-child(5) > p')
navBarColor.addEventListener('mousemove' , function(){
    navBarColorText1.style.color = "blue"
})
navBarColor.addEventListener('mouseleave' , function(){
    navBarColorText1.style.color = "white"
})
navBarColor.addEventListener('mousemove' , function(){
    navBarColorText2.style.color = "blue"
})
navBarColor.addEventListener('mouseleave' , function(){
    navBarColorText2.style.color = "white"
})
navBarColor.addEventListener('mousemove' , function(){
    navBarColorText3.style.color = "blue"
})
navBarColor.addEventListener('mouseleave' , function(){
    navBarColorText3.style.color = "white"
})
navBarColor.addEventListener('mousemove' , function(){
    navBarColorText4.style.color = "blue"
})
navBarColor.addEventListener('mouseleave' , function(){
    navBarColorText4.style.color = "white"
})
navBarColor.addEventListener('mousemove' , function(){
    navBarColorText5.style.color = "blue"
})
navBarColor.addEventListener('mouseleave' , function(){
    navBarColorText5.style.color = "white"
})
navBarColor.addEventListener('mousemove' , function(){
    navBarColorText6.style.color = "blue"
})
navBarColor.addEventListener('mouseleave' , function(){
    navBarColorText6.style.color = "white"
})
navBarColor.addEventListener('mousemove' , function(){
    navBarColorText7.style.color = "blue"
})
navBarColor.addEventListener('mouseleave' , function(){
    navBarColorText7.style.color = "white"
})
navBarColor.addEventListener('mousemove' , function(){
    navBarColorText8.style.color = "blue"
})
navBarColor.addEventListener('mouseleave' , function(){
    navBarColorText8.style.color = "white"
})
navBarColor.addEventListener('mousemove' , function(){
    navBarColorText9.style.color = "blue"
})
navBarColor.addEventListener('mouseleave' , function(){
    navBarColorText9.style.color = "white"
})
navBarColor.addEventListener('mousemove' , function(){
    navBarColorText10.style.color = "blue"
})
navBarColor.addEventListener('mouseleave' , function(){
    navBarColorText10.style.color = "white"
})
navBarColor.addEventListener('mousemove' , function(){
    navBarColorText11.style.color = "blue"
})
navBarColor.addEventListener('mouseleave' , function(){
    navBarColorText11.style.color = "white"
})
navBarColor.addEventListener('mousemove' , function(){
    navBarColorText12.style.color = "blue"
})
navBarColor.addEventListener('mouseleave' , function(){
    navBarColorText12.style.color = "white"
})
navBarColor.addEventListener('mousemove' , function(){
    navBarColorText13.style.color = "blue"
})
navBarColor.addEventListener('mouseleave' , function(){
    navBarColorText13.style.color = "white"
})

const SHOWING_CLASS = "showing";
const firstSlide = document.querySelector('#slider > div:nth-child(1)');
function slide (){
    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
    if(currentSlide){
        currentSlide.classList.remove(SHOWING_CLASS);
        const nextSlide = currentSlide.nextElementSibling;
        if(nextSlide){
            nextSlide.classList.add(SHOWING_CLASS)
        }else{
            firstSlide.classList.add(SHOWING_CLASS)
        }

    }else{
        firstSlide.classList.add(SHOWING_CLASS)
    }
}
slide();
setInterval(slide, 4000);