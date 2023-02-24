jQuery("body").append("<div class='loading'></div>");

jQuery(window).on('load', function () {
	"use strict";
	jQuery(".loading").fadeOut();
});

jQuery(window).on('load', function () {
	"use strict";
	jQuery(".se-pre-con").fadeOut("slow");

});
//--- document ready 
jQuery(document).ready(function ($) {

	"use strict";

	// change background color on hover

	$('.consult-service').hover(function () {
		$(this).addClass('selected');
		$(this).parent().siblings().children('.consult-service').removeClass('selected');
	});

	//===== Coach Email Popup =====//

	jQuery('.send_coach_mail').on('click', function () {
		jQuery('.popup-wraper-coach').addClass('active');
		return false;
	});
	jQuery('.close-btn-popup').on('click', function () {
		jQuery('.popup-wraper-coach').removeClass('active');
		return false;
	});

	//page loader
	$(".pageloader").fadeOut("slow");

	//===== Responsive Header =====//
	jQuery('.menu-btn').on('click', function () {
		jQuery('.responsive-menu').addClass('slidein');
		return false;
	});
	jQuery('.menu-close-btn').on('click', function () {
		jQuery('.responsive-menu').removeClass('slidein');
		return false;
	});

	$('.responsive-menu li.menu-item-has-children').append( '<span></span>' );
	
	jQuery('.responsive-menu li.menu-item-has-children > span').on('click', function () {
		$(this).parent().siblings().children('ul').slideUp();
		$(this).parent().siblings().removeClass('active');
		$(this).parent().children('ul').slideToggle();
		$(this).parent().toggleClass('active');

	});

	jQuery('.select-language li a').on('click', function () {
		jQuery('.select-language li a').removeClass('active');
		jQuery(this).addClass('active');
		var curr_lang = jQuery(this).text();
		jQuery('.language > span').text(curr_lang);

	});

	//popup active
	$('.login-btn .login-btn-form').on('click', function () {
		$('.login-popup-style5').addClass('active');
	});

	$('.login-btn .register-btn-form').on('click', function () {
		$('.register-popup-style5').addClass('active');
	});

	//popup active
	$('.login-popup-style5 > span').on('click', function () {
		$('.login-popup-style5').removeClass('active');
	});

	$('.register-popup-style5 > span').on('click', function () {
		$('.register-popup-style5').removeClass('active');
	});

	// video parallax for top featured
	if ($.isFunction($.fn.YTPlayer)) {
		$("#bgVideo").YTPlayer();
	}
	jQuery('.select-branche li a').on('click', function () {
		jQuery('.select-branche li a').removeClass('active');
		jQuery(this).addClass('active');
		var curr_branch = jQuery(this).text();
		jQuery('.branches > span').text(curr_branch);
		return false;
	});



	jQuery('a.close-btn-popup').on('click', function () {
		jQuery('.popup-wraper-coach').removeClass('active');
		return false;
	});


	//----- sticky header
	var menu_height = $('header').innerHeight();
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll >= 5) {
			$('.sticked').addClass('sticky');
			$(".sticky-menu").hover(function () {
				jQuery('.main-menu').addClass('show');
			});

		} else {
			jQuery('.main-menu').removeClass('show');
			$('.sticked').removeClass('sticky');
		}
	});

	if ($('header').hasClass('stick')) {
		$('.theme-layout').css({ 'padding-top': menu_height });
	}



	jQuery('#myInternalTabs').on('click', 'a', function (e) {
		e.preventDefault();

		var tab_content = $(this).parents('.tab-pane').find('.tab-content');
		var id = $(this).attr('href');
		console.log(id);
		tab_content.find('.tab-pane').removeClass('tab-show animated fadeIn');

		tab_content.find(id).addClass('tab-show animated fadeIn');
	});

	//==== cart dropdown	
	$('.top-shop').on('click', function () {
		$('.top-shop').addClass('active');

	});
	$('.close-btn').on('click', function () {
		$('.top-shop').removeClass('active');
		return false;
	});
	$('.filter-btn').on('click', function (e) {
		var tags = $(".filter-tag").val();
		var cats = $(".filter-cat").val();

		var data = { action: 'esperto_ajax', subaction: 'esperto_courses_filtering_box', tags: tags, cats: cats, nonce: esperto_data.nonce };
		swal.showLoading();
		$.ajax({
			url: esperto_data.ajaxurl,
			type: 'POST',
			data: data,
			success: function (res) {
				console.log(res.data);
				if (res.type !== 'error') {
					$("ul.course-list").empty();
					$("ul.course-list").append(res.data);
					sweetAlert('success', 'You search results ss are following.', 'success');
				}
				else {
					sweetAlert('Error', 'No Cousrses Found ', 'error');
				}

			},
			complete: function (res) {
				//sweetAlert('Error', 'Something wrong adding to wishlist', 'error');
			}
		});

		return false;

	});


	$('.filter-btn-team').on('click', function (e) {
		var search = $('.team_search').val();
		var email = $(this).data('email');
		var msg = $(this).data('msg');
		var detail = $(this).data('detail');

		var data = { action: 'esperto_ajax', subaction: 'esperto_filter_team_post', search: search, email: email, msg: msg, detail: detail, nonce: esperto_data.nonce };
		swal.showLoading();
		$.ajax({
			url: esperto_data.ajaxurl,
			type: 'POST',
			data: data,
			success: function (res) {
				console.log(res);
				if (res.type !== 'error') {
					$("ul.coaches-list").empty();
					$("ul.coaches-list").append(res.data);

					sweetAlert('success', 'You search results are following.', 'success');
				}
				else {
					sweetAlert('Error', 'No Coach Found.', 'error');
				}

			},
			complete: function (res) {
				//sweetAlert('Error', 'Something wrong adding to wishlist', 'error');
			}
		});

		return false;
		//e.preventDefault();

	});

	$('.filter-btn-coach-name').on('click', function (e) {
		var search = $(".filter-coach").attr('value');
		var rating = $(this).data('rating');
		var email = $(this).data('email');
		var msg = $(this).data('msg');
		var detail = $(this).data('detail');
		var courses = $(this).data('courses');
		var membership = $(this).data('membership');

		var data = { action: 'esperto_ajax', subaction: 'esperto_coaches_filtering_box', search: search, rating: rating, email: email, msg: msg, detail: detail, membership: membership, courses: courses, nonce: esperto_data.nonce };
		swal.showLoading();
		$.ajax({
			url: esperto_data.ajaxurl,
			type: 'POST',
			data: data,
			success: function (res) {
				if (res.type !== 'error') {
					$("ul.coaches-list").empty();
					$("ul.coaches-list").append(res.data);

					sweetAlert('success', 'You search results are following.', 'success');
				}
				else {
					sweetAlert('Error', 'No Coach Found.', 'error');
				}

			},
			complete: function (res) {
				//sweetAlert('Error', 'Something wrong adding to wishlist', 'error');
			}
		});

		return false;
		//e.preventDefault();


	});




	$(".filter-cat,.filter-tag,.filter-course,.filter-coach").chosen();
	$('.filter-btn-coach').on('click', function (e) {
		var search = $('.texonomy_search').val();
		var rating = $(this).data('rating');
		var email = $(this).data('email');
		var msg = $(this).data('msg');
		var detail = $(this).data('detail');
		var courses = $(this).data('courses');
		var membership = $(this).data('membership');

		var data = { action: 'esperto_ajax', subaction: 'esperto_coaches_filtering_box', search: search, rating: rating, email: email, msg: msg, detail: detail, membership: membership, courses: courses, nonce: esperto_data.nonce };
		swal.showLoading();
		$.ajax({
			url: esperto_data.ajaxurl,
			type: 'POST',
			data: data,
			success: function (res) {
				if (res.type !== 'error') {
					$("ul.coaches-list").empty();
					$("ul.coaches-list").append(res.data);
					sweetAlert('success', 'You search results are following.', 'success');
				}
				else {
					sweetAlert('Error', 'No Coach Found.', 'error');
				}

			},
			complete: function (res) {
				//sweetAlert('Error', 'Something wrong adding to wishlist', 'error');
			}
		});

		return false;
		//e.preventDefault();

	});
	//--------- top search 			
	$('.top-search > i').on('click', function () {
		$('.top-search form').toggleClass('active');
	});

	//----- popup display on window load	
	function delay() {
		$(".popup-wraper").fadeIn();
	}
	window.setTimeout(delay, 3000);

	$('.close-btn-popup').on('click', function () {
		$('.popup-wraper').addClass('closed');
		return false;
	});

	$('.send_coach_mail').on('click', function () {
		$(".popup-wraper-coach").fadeIn();
		//$(".popup-wraper-coach.closed").fadeOut();
		return false;
	});
	$('form#coachfom').on('submit', function (e) {


		swal.showLoading();
		var action = $(this).attr('data-action');
		var button = $(this).find('input[type="submit"]');
		$.ajax({
			type: 'POST',
			dataType: 'json',
			url: action,
			data: $(this).serialize(),
			beforeSend: function () {

				$(button).prop('disable', true);
			},

			success: function (data) {
				$(button).prop('disable', false);
				$("form#coachfom .message-box").removeClass("alert alert-info");
				$('form#coachfom .message-box').html(data.message);
				sweetAlert(data.message);

				if (data.loggedin === true) {
					window.location.href = redirect_url;
				}
			},
			fail: function (res) {

			}
		});
		e.preventDefault();
	});

	//nice select
	if ($.isFunction($.fn.niceSelect)) {
		$('select.form-control, .appoint-form select.form-control').niceSelect();
	}

	//----- add item plus minus button
	if ($.isFunction($.fn.userincr)) {
		$(".qty").userincr({
			buttonlabels: { 'dec': '-', 'inc': '+' },
		}).data({ 'min': 0, 'max': 20, 'step': 1 });
	}
	$(".userincr-btn-inc, .userincr-btn-dec").on('click', function () {
		$(".update_cart").attr('disabled', false);
	});
	$(".update_cart").on("click", function (e) {

		setTimeout(location.reload.bind(location), 3000);
	});

	//Bootstrap date picker	
	if ($.isFunction($.fn.datepicker)) {
		$('.datepicker').datepicker({
			format: 'mm/dd/yyyy',
			startDate: '-3d'
		});
	}

	//scrollbar plugin
	if ($.isFunction($.fn.perfectScrollbar)) {
		$('.twitter-widget,.res-menu-dropdown,.responsive-menu, .cart-scrollbar, .mor-pix > .product-scroller').perfectScrollbar();
	}
	//----- owl carousel
	if ($.isFunction($.fn.owlCarousel)) {
		$('.feature-caro-btn').owlCarousel({
			loop: false,
			margin: 0,
			smartSpeed: 1000,
			responsiveClass: true,
			autoplay: true,
			URLhashListener: true,
			startPosition: 'URLHash',
			responsive: {
				0: {
					items: 1,
					nav: false,
					dots: false
				},
				600: {
					items: 1,
					nav: true,
					dots: false
				},
				1000: {
					items: 1,
					nav: true,
					loop: false,
					dots: false
				}
			}
		});


		$('.new-feature-caro').owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			autoplay: false,
			autoplayTimeout: 2500,
			smartSpeed: 1000,
			autoplayHoverPause: true,
			nav: false,
			dots: true,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
					dots: false,
				},
				600: {
					items: 1,

				},
				1000: {
					items: 1,
				}
			}

		});
		$('.welcome-gallery').owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			autoplay: false,
			autoplayTimeout: 2500,
			smartSpeed: 1000,
			autoplayHoverPause: true,
			nav: true,
			dots: false,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 1,

				},
				1000: {
					items: 1,
				}
			}

		});




		$('.feature-carousel').owlCarousel({
			items: 1,
			loop: false,
			smartSpeed: 1000,
			center: true,
			autoplay: true,
			margin: 0,
			dots: false,
			nav: true,
			URLhashListener: true,
			autoplayHoverPause: true,
			responsiveClass: true,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			startPosition: 'URLHash',
			responsive: {
				0: {
					items: 1,
					nav: false,
					dots: false
				},
				600: {
					items: 1,
					nav: false
				},
				1000: {
					items: 1,
					nav: false,
					loop: false
				}
			}
		});




		$('.services-caro').owlCarousel({
			items: 4,
			loop: false,
			margin: 10,
			autoplay: false,
			autoplayTimeout: 2000,
			smartSpeed: 1500,
			autoplayHoverPause: true,
			nav: false,
			dots: true,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 2,

				},
				1000: {
					items: 3,
				}
			}

		});

		$('.sponsor-caro').owlCarousel({
			items: 1,
			loop: false,
			margin: 10,
			autoplay: false,
			autoplayTimeout: 2000,
			smartSpeed: 1500,
			autoplayHoverPause: true,
			nav: false,
			dots: true,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 1,

				},
				1000: {
					items: 1,
				}
			}

		});

		$('.feature-caro').owlCarousel({
			items: 1,
			loop: false,
			margin: 0,
			autoplay: true,
			autoplayTimeout: 2500,
			smartSpeed: 1000,
			autoplayHoverPause: true,
			nav: true,
			dots: false,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 1,

				},
				1000: {
					items: 1,
				}
			}

		});
		$('.image-carouesl').owlCarousel({
			loop: false,
			margin: 0,
			smartSpeed: 1000,
			responsiveClass: true,
			autoplay: true,
			responsive: {
				0: {
					items: 1,
					nav: false,
					dots: false
				},
				600: {
					items: 1,
					nav: false,
					dots: false
				},
				1000: {
					items: 1,
					nav: false,
					dots: false
				}
			}
		});


	}
	// slick carousel for detail page
	if ($.isFunction($.fn.slick)) {

		$('.slider-student').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: false,
			arrows: true,
			speed: 800,
			slide: 'li',
			vertical: false,
			centerMode: true,
			centerPadding: '0',
			focusOnSelect: true,
			cssEase: 'ease',
			responsive: [
				{
					breakpoint: 769,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						vertical: false,
						centerMode: true,
						dots: false,
						arrows: true
					}
				},
				{
					breakpoint: 641,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						vertical: false,
						centerMode: true,
						dots: false,
						arrows: true
					}
				}
			]
		});


	}

	//----- layer slider
	if ($.isFunction($.fn.layerSlider)) {
		jQuery("#layerslider").layerSlider({
			responsive: true,
			responsiveUnder: 1280,
			layersContainer: 1170,
			skin: 'fullwidth',
			hoverPrevNext: true,
			skinsPath: 'layerslider/skins/'
		});
	}

	//----- sticky header
	var menu_height = $('header').innerHeight();
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll >= 5) {
			$('.sticked').addClass('sticky');
		} else {
			$('.sticked').removeClass('sticky');
		}
	});

	if ($('header').hasClass('sticked')) {
		$('.theme-layout').css({ 'padding-top': menu_height });
	}
	//----- parallax
	if ($.isFunction($.fn.scrolly)) {
		$('.parallax').scrolly({ bgParallax: true });
	}

	//----- blog post share
	$('.share-this > a').on('click', function () {
		$(this).siblings('ul').toggleClass('active');
		return false;
	});

	//------ Bootstrap date picker	
	if ($.isFunction($.fn.datepicker)) {
		$('.datepicker').datepicker({
			format: 'mm/dd/yyyy',
			startDate: '-3d'
		});
	}

	//-------counter for funfacts
	if ($.isFunction($.fn.counterUp)) {
		$('.counter').counterUp({
			delay: 10,
			time: 1000
		});
	}
	if ($.isFunction($.fn.raterater)) {
		$(function () {
			$('.ratebox').raterater({
				starWidth: 12,
				spaceWidth: 5,
				numStars: 5
			});
		});

	}
	$(".responsive-menu > ul li.menu-item-has-children a").click(function () {

		$(this).next("ul").show();

	});
	new WOW().init();

	jQuery(document).ready(function ($) {
		jQuery('.send_coach_mail').on('click', function () {
			var email = jQuery(this).attr('data-coach-email');

			jQuery("#coachfom2").append('<input type="hidden" class="hiddenemail" name="emailCoach" value="' + email + '" />');
			jQuery('.popup-wraper-coach').addClass('active');
			return false;
		});
	});


	/*===== Sticky Header =====*/
	 if($(".main-bar").hasClass("stick")){
        var full_menu_height = $(".main-bar").innerHeight();
        var full_menu_height = full_menu_height - 49.1; 
        var full_menu_offset = $(".main-bar").offset().top;
        $(window).on("scroll", function() {
            var scroll = $(window).scrollTop();
            if (scroll >= full_menu_offset) {
                $(".stick").addClass("sticky");
                $(".full-menu-height").css({
                    "height":full_menu_height
                });
            } else if (scroll < full_menu_offset){
                $(".stick").removeClass("sticky");
                $(".full-menu-height").css({
                    "height":0
                });
            }
        });
    }

});