(function ($) {
	"use strict";
	var reston = {
		count: 0,
		tweets: function (options, selector) {
			var nonce = $(this).find('input[name=_wpnonce]').val();
			options.action = 'esperto_ajax';
			options.subaction = 'esperto_twitter_ajax_callback';
			options.data =esperto_data.nonce;

			$.ajax({
				url: esperto_data.ajaxurl,
				type: 'POST',
				data: options,
				dataType: "json",
				success: function (res) {

					var reply = res;
					var html = '';

					$.each(reply, function (k, element) {
						var date = new Date(element.created_at);
					
						html += '<div class="twitter-stream"><i><img src="https://themes.webinane.com/wp/experto_elementor/wp-content/uploads/2018/11/twitter-bird.png"></i><div class="twit-name">';
						html += '<span>' + element.user.name + '</span><ins>'+timeSince(date)+'</ins></div>';
						html += '<p>'+element.text+'</p>';
		
						html += '</div>';
					});

					$(selector).append(html);
					$('.twitter-caro').owlCarousel({
						items: 2,
						loop: true,
						margin: 0,
						autoplay: false,
						autoplayTimeout: 1500,
						smartSpeed: 1000,
						autoplayHoverPause: true,
						nav: true,
						dots: false,
						responsiveClass:true,
						responsive:{
							0:{
								items:1,
							},
							600:{
								items:1,

							},
							1000:{
								items:2,
							}
						}
						
					});



				}
			});

		},
	};

	$.fn.tweets = function (options) {

		var settings = {
			screen_name: 'wordpress',
			count: 3,
			data:''
		};
		options = $.extend(settings, options);

		reston.tweets(options, this);
	};


})(jQuery);

function timeSince(date) {

	var seconds = Math.floor((new Date() - date) / 1000);

	var interval = Math.floor(seconds / 31536000);

	if (interval > 1) {
		return interval + " years";
	}
	interval = Math.floor(seconds / 2592000);
	if (interval > 1) {
		return interval + " months ago";
	}
	interval = Math.floor(seconds / 86400);
	if (interval > 1) {
		return interval + " days ago";
	}
	interval = Math.floor(seconds / 3600);
	if (interval > 1) {
		return interval + " hours ago";
	}
	interval = Math.floor(seconds / 60);
	if (interval > 1) {
		return interval + " minutes ago";
	}
	return Math.floor(seconds) + " seconds ago";
}