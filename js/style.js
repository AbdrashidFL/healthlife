$(function(){
 var $video = $('#video')
 	$('.header-video__play').on("click", function(){
    $('.header-video__play').css('display', 'none');
    $('.header-video__time').css('display', 'none');
    $('.header-video__subtitle').css('display', 'none');
    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = ".header-video:before {display: none}";
	});
  // video

  // $('.get-two').hover(function(){
  //   $('div.get-one').toggleClass('get-add')
  //   $('p.get-one__title').toggleClass('get-add__title')
  //   $('p.get-one__text').toggleClass('get-add__text')
  // });
  // $('.get-three').hover(function(){
  //   $('div.get-one').toggleClass('get-add')
  //   $('p.get-one__title').toggleClass('get-add__title')
  //   $('p.get-one__text').toggleClass('get-add__text')
  // });
  // $('.get-four').hover(function(){
  //   $('div.get-one').toggleClass('get-add')
  //   $('p.get-one__title').toggleClass('get-add__title')
  //   $('p.get-one__text').toggleClass('get-add__text')
  // });
  // $('.get-five').hover(function(){
  //   $('div.get-one').toggleClass('get-add')
  //   $('p.get-one__title').toggleClass('get-add__title')
  //   $('p.get-one__text').toggleClass('get-add__text')
  // });
  // $('.get-six').hover(function(){
  //   $('div.get-one').toggleClass('get-add')
  //   $('p.get-one__title').toggleClass('get-add__title')
  //   $('p.get-one__text').toggleClass('get-add__text')
  // });
  $('.review-slider').slick({
	  slidesToShow: 1,
			slidesToScroll: 1,
			nextArrow: "<div class='review-next'><img src='img/review/right.png' alt='направо'></div>",
			prevArrow: "<div class='review-prev'><img src='img/review/left.png' alt='налево'></div>",
	  responsive: [
	      {
	        breakpoint: 576,
	        settings: {
	          slidesToShow: 1,
	          slidesToScroll: 1,
	        }
	      }
	    ]
	});
  // slider review

  $('.header-btn').on("click", function(){
		$(".popup").css('display','flex');
		document.body.style.overflow = 'hidden';
  });
  $('.popup-bg').on("click", function(){
		$(".popup").css('display','none');
		document.body.style.overflow = 'visible';
  });
  // btn header
  $('.footer-contact__text').on("click", function(){
		$(".popup").css('display','flex');
		document.body.style.overflow = 'hidden';
  });
  $('.popup-bg').on("click", function(){
		$(".popup").css('display','none');
		document.body.style.overflow = 'visible';
  });
  // popup call back
  $('.phone').mask("+7 (999) 999 - 99 - 99");
// mask
})