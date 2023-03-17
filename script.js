var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

  // for typing text editor
 
  const text = document.querySelector(".sec-text");

  const textLoad = () => {
      setTimeout(() => {
          text.textContent = "Your Success";
      }, 0);
      setTimeout(() => {
          text.textContent = "Not Immediately";
      }, 4000);
      setTimeout(() => {
          text.textContent = "But Definitely !";
      }, 8000); //1s = 1000 milliseconds
  }

  textLoad();
  setInterval(textLoad, 12000);
    


		$(document).ready(function(){
			$('.buttons').click(function(){
				var buttonvalue = $(this).attr('data-filter');

				if(buttonvalue == 'all'){
					$('.image-filter').show('1000');
				}
				else{
					$('.image-filter').not('.'+buttonvalue).hide('200');
					$('.image-filter').filter('.'+buttonvalue).show('200');
				}
				$(this).addClass('active').siblings().removeClass('active');
			});
		});
