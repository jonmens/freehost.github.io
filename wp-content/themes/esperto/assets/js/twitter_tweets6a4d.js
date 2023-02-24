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
			    html += '<li><i class="fa fa-twitter-square"></i><div class="twitter-meta"><h5>';
			    html += '<a href="' + element.user.url + '">@' + element.user.name + '</a>';
			    html += element.text;
			    html += '</h5>';
                html += '<span>'+timeSince(date)+'</span></div></li>';
			});


		    $(selector).append(html);


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