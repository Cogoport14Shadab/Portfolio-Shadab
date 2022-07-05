const header = document.querySelector("header");
window.addEventListener ("scroll",function() {
    if(this.window.scrollY>0){
        header.style.backgroundColor="white";
    }else{
        header.style.backgroundColor="transparent"; 
    }
    console.log("color");
    // header.classList.toggle("stick",window.scrollY>0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};

 window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '45px',
	duration: 1000,
	reset: true
})

sr.reveal('.home-text',{delay:150, origin:'left'})
sr.reveal('.home-img',{delay:150, origin:'right'})

sr.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact',{delay:150, origin:'bottom'})