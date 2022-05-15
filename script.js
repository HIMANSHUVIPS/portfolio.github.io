let navbar=document.getElementById("navbar");
let loader=document.getElementById("preloader");
let scroll_btn=document.getElementById("scroll");
let body=document.querySelector("body")
let line=document.querySelector("ul li");
let hire=document.getElementById("hire");


window.addEventListener("scroll",function(){
    if(window.pageYOffset>=100){
        navbar.classList.add("sticky");
     }
     else
     navbar.classList.remove("sticky")
     if(window.pageYOffset>=550){
        scroll_btn.classList.add("show");
     }
     else
     scroll_btn.classList.remove("show");
});
scroll_btn.addEventListener("click",function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

hire.addEventListener("click",function(){
    home.classList.toggle('home_toggle');
    
    
})




$(document).ready(function(){
//     $(window).scroll(function(){
//         if(this.scrollY>100){
//             $(`.navbar`).addClass("sticky");
//         }
//         else
//         $(`.navbar`).removeClass("sticky");
//     });
    // dropdown toggler
    $(`.menu-btn`).click(function(){
        $(`.navbar .menu`).toggleClass("active");
        $(`.menu-btn i`).toggleClass("active");
        
    });
    // owl crousel
    $(`.crousel`).owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            },
        }
        //typing animation script
        
    });
    var typed= new Typed(".typing", {
        strings:["Youtuber","Developer","Programer","Designer","Freelancer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
        
    });
    var typed= new Typed(".typing-2", {
        strings:["Youtuber","Developer","Programer","Designer","Freelancer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
        
    });
});
loader.style.display="none";
