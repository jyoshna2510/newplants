// let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-3');
let scrollTop = document.querySelector('.scroll-top');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 250){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }

    if(window.scrollY > 250){
        scrollTop.style.display = 'initial';
    }else{
        scrollTop.style.display = 'none';
    }

}


var swiper = new Swiper(".home-slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop:true,
});



let countDate = new Date('june 1, 2021 00:00:00').getTime();

function countDown(){

    let now = new Date().getTime();

    gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / (second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;

}

setInterval(function(){
    countDown();
},1000)







// let navbar = document.querySelector('.header .navbar');

// document.querySelector('#menu-btn').onclick = () =>{
//     navbar.classList.add('active');
// }

// document.querySelector('#nav-close').onclick = () =>{
//     navbar.classList.remove('active');
// }

// let searchForm = document.querySelector('.search-form');

// document.querySelector('#search-btn').onclick = () =>{
//     searchForm.classList.add('active');
// }

// document.querySelector('#close-search').onclick = () =>{
//     searchForm.classList.remove('active');
// }

// window.onscroll = () =>{
//     navbar.classList.remove('active');

//     if(window.scrollY > 0){
//         document.querySelector('.header').classList.add('active');
//     }else{
//         document.querySelector('.header').classList.remove('active');
//     }
// };

// window.onload = () =>{
//     if(window.scrollY > 0){
//         document.querySelector('.header').classList.add('active');
//     }else{
//         document.querySelector('.header').classList.remove('active');
//     }
// };


// var swiper = new Swiper(".home-slider", {
//     loop:true, 
//     grabCursor:true,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
// });

// var swiper = new Swiper(".product-slider", {
//     loop:true, 
//     grabCursor:true,
//     spaceBetween: 20,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//         0: {
//           slidesPerView: 1,
//         },
//         640: {
//           slidesPerView: 2,
//         },
//         768: {
//           slidesPerView: 3,
//         },
//         1024: {
//           slidesPerView: 4,
//         },
//     },
// });

// var swiper = new Swiper(".review-slider", {
//     loop:true, 
//     grabCursor:true,
//     spaceBetween: 20,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//         0: {
//           slidesPerView: 1,
//         },
//         640: {
//           slidesPerView: 2,
//         },
//         768: {
//           slidesPerView: 3,
//         },
//     },
// });

// var swiper = new Swiper(".blogs-slider", {
//     loop:true, 
//     grabCursor:true,
//     spaceBetween: 10,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//         0: {
//           slidesPerView: 1,
//         },
//         768: {
//           slidesPerView: 2,
//         },
//         991: {
//           slidesPerView: 3,
//         },
//     },
// });

// var swiper = new Swiper(".clients-slider", {
//     loop:true, 
//     grabCursor:true,
//     spaceBetween: 20,
//     breakpoints: {
//         0: {
//           slidesPerView: 1,
//         },
//         640: {
//           slidesPerView: 2,
//         },
//         768: {
//           slidesPerView: 3,
//         },
//         1024: {
//           slidesPerView: 4,
//         },
//     },
// });