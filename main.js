let search = document.querySelectorAll('.search-from');

document.querySelector('#search-box').onclick = () => {  
    search.classList.toggle('active');
}



var swiper = new Swiper(".new-arrival", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    centeredSlides:true,
    breakpoints:{
        0:{
            slidesPerView:0,
        },
        568:{
            slidesPerView:2,
        },
        768:{
            slidesPerView:2,
        },
        1020:{
            slidesPerView:3,
        },
    },
  });


